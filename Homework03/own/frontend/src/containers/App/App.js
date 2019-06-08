import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from 'reactstrap'

import {
  POSTS_QUERY,
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION
} from '../../graphql'
import Post from '../../components/Post/Post'
import classes from './App.module.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

let unsubscribe = null

class App extends Component {
  state = {
    formTitle: '',
    formBody: '',
    formAuthor: ''
  }
  constructor(props) {
    super(props);
    // this.changeValue = this.changeValue.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropDownValue: 'Choose an author'
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  handleChange = panel => (isExpanded) => {
    this.setState({ expanded: isExpanded ? panel : false });
  };

  handleFormSubmit = e => {
    e.preventDefault()

    const { formTitle, formBody, formAuthor } = this.state

    if (!formTitle || !formBody || !formAuthor) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: formAuthor
      }
    })

    this.setState({
      formAuthor: '',
      formTitle: '',
      formBody: ''
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    
                    <FormGroup row>
                      <Label for="Author" md={3}>
                        Author
                      </Label>
                      <Col sm={9}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                          <DropdownToggle caret>
                          {this.state.dropDownValue}
                          </DropdownToggle>
                            <Query query={POSTS_QUERY}>
                              {({ loading, error, data, subscribeToMore }) => {
                                if (loading) return <p>Loading...</p>
                                if (error) return <p>Error :(((</p>
                                console.log('users', data.posts);
                                const users = data.users.map((user, id) => (
                                  <DropdownItem><div onClick={()=>{this.setState({dropDownValue: user.name},
                                    console.log('formauthor,',this.state.formAuthor),this.setState({formAuthor: user.id}))}}>{user.name}</div></DropdownItem>
                                ))

                                return <DropdownMenu>{users}</DropdownMenu>
                              }}
                            </Query>
                        </Dropdown>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <Query query={POSTS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>
                
                let postOfAuthor = {}
                data.posts.map((post, i) => {
                  let author = post.author.name;
                  if(author in postOfAuthor) {
                    postOfAuthor[author].cnt += 1
                    postOfAuthor[author].posts.push(post)
                  }
                  else {
                    postOfAuthor[author] = {
                      cnt: 1,
                      posts: [post]
                    }
                  }
                })
                
                const posts = Object.keys(postOfAuthor).map((name_index, id) => (
                  <ExpansionPanel key={id} expanded={this.state.expanded === id} onChange={this.handleChange(id)}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography><b>{name_index}<br/>{postOfAuthor[name_index].cnt}&nbsp;posts</b></Typography>
                      {/* <Typography>Posted Number : {postOfAuthor[name_index].cnt}</Typography> */}
                    </ExpansionPanelSummary>
                      {postOfAuthor[name_index].posts.map((hisPost, id) => {
                        return <ExpansionPanelDetails key={id}><Post data={hisPost} /></ExpansionPanelDetails>
                      })}
                  </ExpansionPanel>
                ))
                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: POSTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev
                      const newPost = subscriptionData.data.post.data

                      return {
                        ...prev,
                        posts: [newPost, ...prev.posts]
                      }
                    }
                  })

                return <div>{posts}</div>
              }}
            </Query>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App

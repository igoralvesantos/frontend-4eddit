import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import PostCard from "../../components/PostCard";
import { routes } from "../Router/index";
import PostFormCard from "../../components/PostFormCard";
import Header from "../../components/Header";
import { LogOutButton } from "../../style/global";
import { LoadingPage } from "../../components/LoadingPage";
import {
  createPost,
  getAllPosts,
  votePost,
  setSelectedPostId,
} from "../../actions/post";
import {
  TextField,
  ButtonPost,
  FormPost,
  ContainerInput,
  FeedContainer,
} from "../../style/feed";

const feedForm = [
  {
    name: "title",
    type: "text",
    label: "Título",
    required: true,
  },
  {
    name: "text",
    type: "text",
    label: "Escreva seu post",
    required: true,
  },
];

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  componentDidMount() {
    const { goToLoginPage, getAllPosts } = this.props;
    const token = window.localStorage.getItem("token");

    token === null ? goToLoginPage() : getAllPosts();
  }

  logOut = () => {
    localStorage.removeItem("token");
    alert("Você foi deslogado");
    this.props.goToLoginPage();
  };

  handleFieldChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  sendPostData = (event) => {
    event.preventDefault();
    const { title, text } = this.state.form;
    const { createPost } = this.props;

    createPost(title, text);
    this.setState({ form: {} });
  };

  handleClickPost = (postId) => {
    const { setSelectedPostId, goToPostDetails } = this.props;

    setSelectedPostId(postId);
    goToPostDetails();
  };

  handleLoadingPage = () => {
    const { allPosts } = this.props;
    return allPosts.length === 0 ? true : false;
  };

  render() {
    const { allPosts, votePost, goToFeedPage } = this.props;

    return (
      <div>
        <Header onClick={goToFeedPage}>
          <LogOutButton onClick={this.logOut}>Logout</LogOutButton>
        </Header>
        <FeedContainer>
          <PostFormCard>
            <FormPost onSubmit={this.sendPostData}>
              {feedForm.map((input) => (
                <ContainerInput key={input.name}>
                  <label>{input.label}:</label>
                  <TextField
                    onChange={this.handleFieldChange}
                    name={input.name}
                    type={input.type}
                    label={input.label}
                    value={this.state.form[input.name] || ""}
                  />
                </ContainerInput>
              ))}
              <ButtonPost type="submit" onClick={this.sendPostData}>
                Postar
              </ButtonPost>
            </FormPost>
          </PostFormCard>
          {this.handleLoadingPage() ? (
            <LoadingPage />
          ) : (
            allPosts.map((post) => (
              <PostCard
                key={post.id}
                onClick={() => this.handleClickPost(post.id)}
                positiveVote={() => votePost(+1, post.id)}
                negativeVote={() => votePost(-1, post.id)}
                totalVotes={post.votesCount}
                username={post.username}
                title={post.title}
                content={post.text}
                commentCount={post.commentsNumber}
                voted={post.userVoteDirection}
              />
            ))
          )}
        </FeedContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.posts.allPosts,
});

const mapDispatchToProps = (dispatch) => ({
  goToLoginPage: () => dispatch(push(routes.root)),
  goToFeedPage: () => dispatch(push(routes.feed)),
  goToRegisterPage: () => dispatch(push(routes.register)),
  createPost: (title, text) => dispatch(createPost(title, text)),
  getAllPosts: () => dispatch(getAllPosts()),
  votePost: (direction, postId) => dispatch(votePost(direction, postId)),
  goToPostDetails: () => dispatch(push(routes.postDetails)),
  setSelectedPostId: (postId) => dispatch(setSelectedPostId(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

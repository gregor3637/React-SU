import React, { Component } from 'react';

import PageLayout from '../../components/page-layout';
import Origamis from '../../components/origamis';
import UserContext from '../../Context';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            posts: null
        }
    }

    static contextType = UserContext;

    componentDidMount() {
        // this.getUser(this.props.match.params.userid);
    }

    getUser = async (id) => {
        const response = await fetch('firebase')
        const user = await response.json();

        if (!response.ok) {
            this.props.history.push('/error ')
        }
        console.log(user);

        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length
        })
    }

    logOut = () => {
        this.context.logOut();
        this.props.history.push('/');
    }

    render() {
        const {
            username,
            posts
        } = this.state;

        if (!username) {
            return (
                <PageLayout>
                    <div>Loading...</div>
                </PageLayout>
            )
        }

        return (
            <PageLayout>
                <div>
                    <p>User: {username} </p>
                    <p>Posts: {posts.length} </p>

                    <button onClick={this.logOut}></button>
                </div>
                <Origamis length={3} />
            </PageLayout>
        )
    }
}

export default Profile;
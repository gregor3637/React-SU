import React, { Component } from 'react';

import PageLayout from '../../components/page-layout';
import Origamis from '../../components/origamis';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            posts: null
        }
    }


    componentDidMount() {
        this.getUser(this.props.match.params.userid);
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
                </div>
                <Origamis length={3} />
            </PageLayout>
        )
    }
}

export default Profile;
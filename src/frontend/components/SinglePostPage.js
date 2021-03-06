import React from 'react';
import moment from 'moment';

import { get } from '../fetcher';

import NewsPost from './NewsPost';

const NewsPage = React.createClass({
    getInitialState() {
        return {
            error: undefined,
            post: undefined
        };
    },
    componentDidMount() {
        get('/posts/' + this.props.params.postId)
            .then(post => this.setState({ post }))
            .catch(err =>  {
                console.log(err);
                if (err.status === 404) {
                    this.setState({error: err.statusText})
                }
            });
    },
    render() {
        const { post, error } = this.state;

        if (error) {
            return <section>{error}</section>;
        }

        if (!post) {
            return <section></section>;
        }

        return (
            <section>
                <NewsPost key={post._id} post={post}/>
            </section>
        );
    }
});



export default NewsPage;
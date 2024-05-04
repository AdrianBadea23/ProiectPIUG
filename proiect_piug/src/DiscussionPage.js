import React, { useState } from 'react';

function DiscussionPage() {
    // State to manage discussions
    const [discussions, setDiscussions] = useState([
        { id: 1, title: "Best practices for unit testing", content: "Discussing various techniques and strategies for unit testing in different programming languages." },
        { id: 2, title: "Tips for optimizing SQL queries", content: "Sharing tips and tricks for improving the performance of SQL queries in database applications." },
        { id: 3, title: "Frontend frameworks comparison", content: "Comparing different frontend frameworks such as React, Angular, and Vue.js in terms of performance, features, and ease of use." }
    ]);

    // State to manage new discussion form input
    const [newDiscussionTitle, setNewDiscussionTitle] = useState('');
    const [newDiscussionContent, setNewDiscussionContent] = useState('');

    // Function to handle form submission and add new discussion
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newDiscussionTitle && newDiscussionContent) {
            const newDiscussion = {
                id: discussions.length + 1,
                title: newDiscussionTitle,
                content: newDiscussionContent
            };
            setDiscussions([...discussions, newDiscussion]);
            setNewDiscussionTitle('');
            setNewDiscussionContent('');
        }
    };

    return (
        <div className="container mt-4">
            <h1>Latest Discussions</h1>
            <ul className="list-group">
                {discussions.map(discussion => (
                    <li key={discussion.id} className="list-group-item">
                        <h3>{discussion.title}</h3>
                        <p>{discussion.content}</p>
                    </li>
                ))}
            </ul>
            {/* Form for adding new discussion */}
            <h2>Add New Discussion</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="discussionTitle" className="form-label">Discussion Title</label>
                    <input type="text" className="form-control" id="discussionTitle" value={newDiscussionTitle} onChange={(e) => setNewDiscussionTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="discussionContent" className="form-label">Discussion Content</label>
                    <textarea className="form-control" id="discussionContent" rows="3" value={newDiscussionContent} onChange={(e) => setNewDiscussionContent(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default DiscussionPage;

import React from 'react';
import { Link } from 'react-router-dom';

const ReactionList = ({ reactions }) => {
  return (
    <div>
        <div>
            <span>Reactions</span>
        </div>
        <div className="card-body">
            {reactions &&
            reactions.map(reaction => (
                <p key={reaction._id}>
                {reaction.reactionBody} {'// '}
                <Link to={`/profile/${reaction.username}`} style={{ fontWeight: 700 }}>
                    {reaction.username} on {reaction.createdAt}
                </Link>
                </p>
            ))}
        </div>
    </div>
  );
};

export default ReactionList;
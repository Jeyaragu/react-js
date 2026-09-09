// Smart Component or container component
import { useState, useRef } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

import Button from './Button';


const QuickFeedback = () => {
    // useRef hook will store the user name to show the alert message.
    const nameRef = useRef<HTMLInputElement>(null);
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        comments: ''
    });
    const [activityLog, setActivityLog] = useState<string[]>([]);

    const addActivityLog = (message: string) => {
        setActivityLog((prev) => {
            return [...prev, message]
        })
    }
    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = event.target;
        // Functional update
        setFeedback((prevState) => {
            const updatedState = {
                ...prevState,
                [name]: value
            };
            return updatedState;
        });
    };
    const handleOnClick = (questionId: string, feedBackType: string) => {
        setFeedback((prevState) => {
            const updateState = {
                ...prevState,
                [questionId]: feedBackType
            }
            return updateState
        })
    }
    const handleReset = () => {
        setFeedback({
            name: '',
            email: '',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            comments: ''
        })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (nameRef.current) {
            alert(`${nameRef.current.name} submitted the feedback form.`);
        }
        handleReset()
        console.log(feedback, activityLog)
    }
    return (
        <div className="quick-feedback">
            <form onReset={handleReset} onSubmit={handleSubmit}>
                <label> Name:
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        name="name"
                        value={feedback.name}
                        ref={nameRef}
                        onChange={handleChange}
                        onFocus={() => addActivityLog('Name focused')}
                    />
                </label>
                <br />
                <label> Email:
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                        value={feedback.email}
                        onChange={handleChange}
                        onFocus={() => addActivityLog('Email focused')}
                    />
                </label>
                <br />
                <label> Did you find what you were looking for:
                    <div style={{ display: 'flex', gap: '20px', margin: '15px 0' }}>
                        {/* Like Button of q1*/}
                        <Button
                            type='button'
                            name='q1'
                            onClick={() => handleOnClick('q1', 'like')}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: feedback.q1 === 'like' ? '#22c55e' : '#64748b',
                                transform: feedback.q1 === 'like' ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.2s'
                            }}
                        >
                            <ThumbsUp size={32} fill={feedback.q1 === 'like' ? '#22c55e' : 'none'} />
                        </Button>
                        {/* Dislike button of q1*/}
                        <Button
                            type='button'
                            name='q1'
                            onClick={() => handleOnClick('q1', 'dislike')}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: feedback.q1 === 'dislike' ? '#ef4444' : '#64748b',
                                transform: feedback.q1 === 'dislike' ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.2s'
                            }}
                        >
                            <ThumbsDown size={32} fill={feedback.q1 === 'dislike' ? '#ef4444' : 'none'} />
                        </Button>
                    </div>
                </label>
                <br />
                <label> Satisfied with current role:
                    <div style={{ display: 'flex', gap: '20px', margin: '15px 0' }}>
                        {/* Like Button of q2*/}
                        <Button
                            type='button'
                            name='q2'
                            onClick={() => handleOnClick('q2', 'like')}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: feedback.q2 === 'like' ? '#22c55e' : '#64748b',
                                transform: feedback.q2 === 'like' ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.2s'
                            }}>
                            <ThumbsUp size={32} fill={feedback.q2 === 'like' ? '#22c55e' : 'none'} />
                        </Button>
                        {/* Dislike button of q2*/}
                        <Button
                            type='button'
                            name='q2'
                            onClick={() => handleOnClick('q2', 'dislike')}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: feedback.q2 === 'dislike' ? '#ef4444' : '#64748b',
                                transform: feedback.q2 === 'dislike' ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.2s'
                            }}
                        >
                            <ThumbsDown size={32} fill={feedback.q2 === 'dislike' ? '#ef4444' : 'none'} />
                        </Button>
                    </div>
                </label>
                <br />
                <label> Does the company provides you work life balance:
                    <div style={{ display: 'flex', gap: '20px', margin: '15px 0' }}>
                        {/* Like Button of q3*/}
                        <Button
                            type='button'
                            name='q3'
                            onClick={() => handleOnClick('q3', 'like')}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: feedback.q3 === 'like' ? '#22c55e' : '#64748b',
                                transform: feedback.q3 === 'like' ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.2s'
                            }}>
                            <ThumbsUp size={32} fill={feedback.q3 === 'like' ? '#22c55e' : 'none'} />
                        </Button>
                        {/* Dislike button of q3 */}
                        <Button
                            type='button'
                            name='q3'
                            onClick={() => handleOnClick('q3', 'dislike')}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: feedback.q3 === 'dislike' ? '#ef4444' : '#64748b',
                                transform: feedback.q3 === 'dislike' ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.2s'
                            }}
                        >
                            <ThumbsDown size={32} fill={feedback.q3 === 'dislike' ? '#ef4444' : 'none'} />
                        </Button>
                    </div>
                </label>
                <br />
                <label> Would you recommend this company to others:
                    <div style={{ display: 'flex', gap: '20px', margin: '15px 0' }}>
                        {/* Like Button of q4*/}
                        <Button
                            type='button'
                            name='q4'
                            onClick={() => handleOnClick('q4', 'like')}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: feedback.q4 === 'like' ? '#22c55e' : '#64748b',
                                transform: feedback.q4 === 'like' ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.2s'
                            }}>
                            <ThumbsUp size={32} fill={feedback.q4 === 'like' ? '#22c55e' : 'none'} />
                        </Button>
                        {/* Dislike button of q4*/}
                        <Button
                            type='button'
                            name='q4'
                            onClick={() => handleOnClick('q4', 'dislike')}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: feedback.q4 === 'dislike' ? '#ef4444' : '#64748b',
                                transform: feedback.q4 === 'dislike' ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.2s'
                            }}
                        >
                            <ThumbsDown size={32} fill={feedback.q4 === 'dislike' ? '#ef4444' : 'none'} />
                        </Button>
                    </div>
                </label>
                <br />
                <label> Additional Comments:
                    <br />
                    <textarea
                        placeholder="Enter your comments"
                        name="comments"
                        value={feedback.comments}
                        onChange={handleChange}
                        onFocus={() => addActivityLog('Comments focused')}
                    />
                </label>
                <br />
                <Button type='submit' name='submit' text='Submit' />
                <Button type='reset' name='reset' text='Reset' />
            </form>
        </div>
    )
}

export default QuickFeedback;
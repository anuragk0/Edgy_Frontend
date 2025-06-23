import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import { addSection, getSections, deleteSection } from '../../../store/Section/SectionAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import './Card.css';
import { toast } from 'react-toastify';

const SectionContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        loading,
        success,
        error,
        message,
        currentSection,
        isAuthenticated,
        user
    } = useSelector(state => state.user);

    const sections = useSelector((state) => state.section.sections)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState('');

    // Fetch sections from backend on mount
    useEffect(() => {
        dispatch(getSections());
    }, [dispatch]);

    const handleAddCard = () => {
        setIsModalOpen(true);
    };

    const handleCreateCard = () => {
        if (!isAuthenticated || !user || !user._id) {
            toast.error("Please login first");
            return;
        }
        if (newCardTitle.trim()) {
            dispatch(addSection({
                title: newCardTitle,
                description: "Click to add description"
            }));
            setNewCardTitle('');
            setIsModalOpen(false);
        }
    };

    const handleDeleteCard = (cardId) => {
        dispatch(deleteSection(cardId));
    };

    const handleCardClick = (cardId) => {
        navigate(`/section/${cardId}`);
    };

    const handleCancel = () => {
        setNewCardTitle('');
        setIsModalOpen(false);
    };

    return (
        <div className="card-grid">
            {loading && <Loading/>}
            {sections && sections.map(section => (
                <Section
                    key={section._id || section.id}
                    title={section.title}
                    description={section.description}
                    onClick={() => handleCardClick(section._id || section.id)}
                    onDelete={() => handleDeleteCard(section._id || section.id)}
                />
            ))}
            <div className="classroom-card add-card" onClick={handleAddCard}>
                <div className="card-content">
                    <span>+ Add New Card</span>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className="modal-title">Create New Card</h2>
                        <input
                            type="text"
                            className="modal-input"
                            placeholder="Enter card title"
                            value={newCardTitle}
                            onChange={(e) => setNewCardTitle(e.target.value)}
                            autoFocus
                        />
                        <div className="modal-buttons">
                            <button className="modal-button cancel" onClick={handleCancel}>
                                Cancel
                            </button>
                            <button 
                                className="modal-button create" 
                                onClick={handleCreateCard}
                                disabled={loading}
                            >
                                {loading ? 'Creating...' : 'Create'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SectionContainer; 
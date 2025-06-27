import React, { useState } from 'react';
import { createClass } from '../../services/classService';

const AddClassModal = ({ onClose, onClassCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    from: '',
    to: '',
    status: 'active'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createClass({ ...formData, teacher: 'John Smith' });
      onClassCreated();
      onClose();
    } catch (err) {
      console.error('Create class failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Add New Class</h2>
        <input name="title" onChange={handleChange} value={formData.title} placeholder="Title" required />
        <input name="location" onChange={handleChange} value={formData.location} placeholder="Location" required />
        <input name="from" type="datetime-local" onChange={handleChange} value={formData.from} required />
        <input name="to" type="datetime-local" onChange={handleChange} value={formData.to} required />
        <select name="status" onChange={handleChange} value={formData.status}>
          <option value="active">Active</option>
          <option value="cancelled">Cancelled</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Class'}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddClassModal;

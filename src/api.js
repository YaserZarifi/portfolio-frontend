
//

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

const fetchAPI = async (endpoint) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Fetching ${endpoint} failed:`, error);
        return [];
    }
};

export const getProjects = () => fetchAPI('projects');
export const getSkills = () => fetchAPI('skills');
export const getExperiences = () => fetchAPI('experiences');
export const getEducations = () => fetchAPI('educations');
export const getCertificates = () => fetchAPI('certificates');





export const sendMessage = async (messageData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/messages/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Sending message failed:', error);
        throw error;
    }
};


export const getProfile = () => fetchAPI('profile');

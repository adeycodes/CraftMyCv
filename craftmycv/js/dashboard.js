// dashboard.js

// Handle navigation tabs
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function () {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Handle create new resume/portfolio button
const createButton = document.querySelector('.create-button');
createButton.addEventListener('click', function () {
    alert('Creating new resume/portfolio...');
});

// Template data with unique preview images
const templates = [
    {
        id: 1,
        name: "Modern Professional",
        preview: "./assets/RESUME_1.png"
    },
    {
        id: 2,
        name: "Creative Designer",
        preview: "./assets/RESUME_2.png"
    },
    {
        id: 3,
        name: "Academic CV",
        preview: "./assets/RESUME_3.png"
    },
    {
        id: 4,
        name: "Executive",
        preview: "./assets/RESUME_4.png"
    }
];

// Recent documents data
const recentDocuments = [
    {
        id: 1,
        name: "John Smith - Software Engineer CV",
        type: "cv",
        lastEdited: "2023-06-15",
        preview: "./assets/RESUME-5.png"
    },
    {
        id: 2,
        name: "Smitha Reddy - Graphic Designer",
        type: "portfolio",
        lastEdited: "2023-06-10",
        preview: "./assets/Resume_6.png"
    }
];

// Function to generate template cards
function generateTemplateCards() {
    const container = document.querySelector('.templates-container');

    // Clear existing content
    container.innerHTML = '';

    // Generate cards for each template
    templates.forEach(template => {
        const card = document.createElement('div');
        card.className = 'document-card';
        card.dataset.templateId = template.id;
        card.dataset.type = 'template';

        card.innerHTML = `
            <div class="document-preview" style="background-image: url('${template.preview}')"></div>
            <p class="document-name">${template.name}</p>
        `;

        // Add click event to select template
        card.addEventListener('click', function () {
            showPreview(template, 'template');
        });

        container.appendChild(card);
    });
}

// Function to generate recent documents
function generateRecentDocuments() {
    const container = document.querySelector('.documents-container');
    
    // Clear existing content
    container.innerHTML = '';
    
    // Generate cards for each document
    recentDocuments.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'document-card';
        card.dataset.documentId = doc.id;
        card.dataset.type = 'document';
        
        card.innerHTML = `
            <div class="document-preview" style="background-image: url('${doc.preview}')"></div>
            <p class="document-name">${doc.name}</p>
        `;
        
        // Add click event to open document
        card.addEventListener('click', function() {
            showPreview(doc, 'document');
        });
        
        container.appendChild(card);
    });
}

// Function to show preview modal
function showPreview(item, type) {
    // Remove any existing preview modal
    const existingModal = document.querySelector('.preview-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'preview-modal';
    
    // Create modal content
    modal.innerHTML = `
        <div class="preview-overlay"></div>
        <div class="preview-content">
            <div class="preview-header">
                <h3>${item.name}</h3>
                <span class="preview-close">&times;</span>
            </div>
            <div class="preview-image-container">
                <img src="${item.preview}" alt="${item.name}" class="preview-image">
            </div>
            <div class="preview-actions">
                <button class="preview-action-btn use-btn">${type === 'template' ? 'Use Template' : 'Open Document'}</button>
                <button class="preview-action-btn cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('.preview-close');
    const overlay = modal.querySelector('.preview-overlay');
    const useBtn = modal.querySelector('.use-btn');
    const cancelBtn = modal.querySelector('.cancel-btn');
    
    const closeModal = () => {
        modal.remove();
    };
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    useBtn.addEventListener('click', () => {
        if (type === 'template') {
            alert(`Using template: ${item.name}`);
            // Redirect to editor with template
            // window.location.href = `editor.html?template=${item.id}`;
        } else {
            alert(`Opening document: ${item.name}`);
            // Redirect to editor with document
            // window.location.href = `editor.html?document=${item.id}`;
        }
        closeModal();
    });
    
    // Highlight selected card
    document.querySelectorAll('.document-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selector = type === 'template' 
        ? `.document-card[data-template-id="${item.id}"]` 
        : `.document-card[data-document-id="${item.id}"]`;
    
    const selectedCard = document.querySelector(selector);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateTemplateCards();
    generateRecentDocuments();
});
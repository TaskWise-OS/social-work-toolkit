// Application State
let selectedAreas = [];
let currentQuery = '';
let currentState = '';

// DOM Elements
const inputSection = document.getElementById('inputSection');
const loadingSection = document.getElementById('loadingSection');
const resultsSection = document.getElementById('resultsSection');
const practiceQuery = document.getElementById('practiceQuery');
const stateSelect = document.getElementById('stateSelect');
const findToolsBtn = document.getElementById('findToolsBtn');
const newSearchBtn = document.getElementById('newSearchBtn');
const toolsGrid = document.getElementById('toolsGrid');
const insightsContent = document.getElementById('insightsContent');
const resourcesContent = document.getElementById('resourcesContent');
const resultsSubtitle = document.getElementById('resultsSubtitle');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
});

function initializeEventListeners() {
    // Tag button selection
    const tagButtons = document.querySelectorAll('.tag-btn');
    tagButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const area = btn.dataset.area;
            if (selectedAreas.includes(area)) {
                selectedAreas = selectedAreas.filter(a => a !== area);
                btn.classList.remove('active');
            } else {
                selectedAreas.push(area);
                btn.classList.add('active');
            }
        });
    });

    // Find tools button
    findToolsBtn.addEventListener('click', handleSearch);

    // New search button
    newSearchBtn.addEventListener('click', resetSearch);

    // Enter key in textarea
    practiceQuery.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleSearch();
        }
    });
}

function handleSearch() {
    currentQuery = practiceQuery.value.trim();
    currentState = stateSelect.value;

    if (!currentQuery && selectedAreas.length === 0) {
        alert('Please describe your practice need or select at least one practice area.');
        return;
    }

    showSection('loading');

    // Simulate processing time
    setTimeout(() => {
        const results = findRelevantTools();
        displayResults(results);
        showSection('results');
    }, 1500);
}

function findRelevantTools() {
    let matchedTools = [];

    TOOLKIT_DATABASE.forEach(tool => {
        let relevanceScore = 0;
        let matchReasons = [];

        // Check practice area match
        const areaMatch = selectedAreas.some(area => tool.practiceAreas.includes(area));
        if (areaMatch) {
            relevanceScore += 40;
            matchReasons.push('practice area');
        }

        // Check jurisdiction match
        if (currentState && tool.jurisdiction.includes(currentState)) {
            relevanceScore += 20;
            matchReasons.push('jurisdiction');
        } else if (!currentState) {
            relevanceScore += 10;
        }

        // Check query keywords
        if (currentQuery) {
            const queryLower = currentQuery.toLowerCase();
            const toolText = `${tool.name} ${tool.description} ${tool.category}`.toLowerCase();

            // Check for keyword matches
            Object.entries(PRACTICE_AREAS).forEach(([areaKey, areaData]) => {
                const keywordMatch = areaData.keywords.some(keyword =>
                    queryLower.includes(keyword.toLowerCase())
                );
                if (keywordMatch && tool.practiceAreas.includes(areaKey)) {
                    relevanceScore += 30;
                    matchReasons.push('keyword match');
                }
            });

            // Direct text match
            if (toolText.includes(queryLower.substring(0, 20))) {
                relevanceScore += 20;
            }
        }

        if (relevanceScore > 0) {
            matchedTools.push({
                ...tool,
                relevanceScore,
                matchReasons
            });
        }
    });

    // Sort by relevance
    matchedTools.sort((a, b) => b.relevanceScore - a.relevanceScore);

    // If no matches, return general tools
    if (matchedTools.length === 0) {
        matchedTools = TOOLKIT_DATABASE.slice(0, 6).map(tool => ({
            ...tool,
            relevanceScore: 10,
            matchReasons: ['general']
        }));
    }

    return matchedTools.slice(0, 9);
}

function displayResults(tools) {
    // Generate insights
    generateInsights(tools);

    // Display tools
    toolsGrid.innerHTML = '';
    tools.forEach((tool, index) => {
        const card = createToolCard(tool, index);
        toolsGrid.appendChild(card);
    });

    // Generate additional resources
    generateAdditionalResources(tools);

    // Update subtitle
    const areaNames = selectedAreas.map(area => PRACTICE_AREAS[area]?.name || area);
    if (areaNames.length > 0) {
        resultsSubtitle.textContent = `For ${areaNames.join(', ')}`;
    } else {
        resultsSubtitle.textContent = 'Based on your practice needs';
    }
}

function createToolCard(tool, index) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const relevanceBadge = getRelevanceBadge(tool.relevanceScore);
    const practiceAreaTags = tool.practiceAreas
        .map(area => PRACTICE_AREAS[area]?.name || area)
        .slice(0, 3);

    card.innerHTML = `
        <div class="tool-header">
            <h3 class="tool-title">${tool.name}</h3>
            <span class="tool-category">${tool.category}</span>
        </div>
        <p class="tool-description">${tool.description}</p>
        <div class="tool-meta">
            <div class="tool-meta-item">
                <span class="tool-meta-label">Relevance:</span>
                <span class="tool-meta-value">${relevanceBadge}</span>
            </div>
            <div class="tool-meta-item">
                <span class="tool-meta-label">Practice Areas:</span>
                <div class="tool-tags">
                    ${practiceAreaTags.map(area => `<span class="tool-tag">${area}</span>`).join('')}
                </div>
            </div>
            <div class="tool-meta-item">
                <span class="tool-meta-label">Trauma-Informed:</span>
                <span class="tool-meta-value">${tool.traumaInformed ? 'Yes ✓' : 'No'}</span>
            </div>
        </div>
    `;

    // Add click handler to open URL
    if (tool.url) {
        card.addEventListener('click', () => {
            window.open(tool.url, '_blank', 'noopener,noreferrer');
        });
        card.setAttribute('role', 'link');
        card.setAttribute('tabindex', '0');

        // Add keyboard support
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(tool.url, '_blank', 'noopener,noreferrer');
            }
        });
    }

    return card;
}

function getRelevanceBadge(score) {
    if (score >= 60) {
        return '<span class="relevance-badge relevance-high">⭐ Highly Relevant</span>';
    } else if (score >= 30) {
        return '<span class="relevance-badge relevance-medium">✓ Relevant</span>';
    } else {
        return '<span class="relevance-badge relevance-standard">General Resource</span>';
    }
}

function generateInsights(tools) {
    const traumaInformedCount = tools.filter(t => t.traumaInformed).length;
    const categories = [...new Set(tools.map(t => t.category))];

    let insights = `<p>Based on your practice needs, we've identified <strong>${tools.length} relevant resources</strong> to support your work.</p>`;

    if (traumaInformedCount > 0) {
        insights += `<p><strong>${traumaInformedCount} of these tools</strong> are trauma-informed, which aligns with best-practice approaches for supporting clients who may have experienced trauma.</p>`;
    }

    if (selectedAreas.length > 0) {
        const areaNames = selectedAreas.map(area => PRACTICE_AREAS[area]?.name).join(', ');
        insights += `<p>These recommendations are tailored for <strong>${areaNames}</strong> practice contexts.</p>`;
    }

    if (currentState) {
        const stateNames = {
            'nsw': 'New South Wales',
            'vic': 'Victoria',
            'qld': 'Queensland',
            'wa': 'Western Australia',
            'sa': 'South Australia',
            'tas': 'Tasmania',
            'act': 'Australian Capital Territory',
            'nt': 'Northern Territory'
        };
        insights += `<p>Tools have been prioritized for <strong>${stateNames[currentState]}</strong> where jurisdiction-specific resources are available.</p>`;
    }

    insightsContent.innerHTML = insights;
}

function generateAdditionalResources(tools) {
    let resources = '<ul>';

    resources += '<li>Always consult with your supervisor when implementing new assessment tools or frameworks</li>';
    resources += '<li>Ensure you have appropriate training before using specialized assessment or intervention tools</li>';
    resources += '<li>Consider the cultural appropriateness of tools for the specific clients and communities you work with</li>';

    const hasRiskTools = tools.some(t => t.category === 'Risk Assessment');
    if (hasRiskTools) {
        resources += '<li>Risk assessment tools should be used as part of comprehensive assessment, not in isolation</li>';
    }

    const hasScreeningTools = tools.some(t => t.category === 'Screening Tool');
    if (hasScreeningTools) {
        resources += '<li>Screening tools identify potential concerns but are not diagnostic instruments</li>';
    }

    resources += '</ul>';

    resourcesContent.innerHTML = resources;
}

function showSection(section) {
    inputSection.classList.add('hidden');
    loadingSection.classList.add('hidden');
    resultsSection.classList.add('hidden');

    if (section === 'input') {
        inputSection.classList.remove('hidden');
    } else if (section === 'loading') {
        loadingSection.classList.remove('hidden');
    } else if (section === 'results') {
        resultsSection.classList.remove('hidden');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetSearch() {
    practiceQuery.value = '';
    stateSelect.value = '';
    selectedAreas = [];

    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    showSection('input');
}

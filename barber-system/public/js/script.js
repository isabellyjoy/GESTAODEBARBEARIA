document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const loginScreen = document.getElementById('login-screen');
    const mainContainer = document.getElementById('main-container');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const navLinks = document.querySelectorAll('.nav-link[data-view]');
    const viewSections = document.querySelectorAll('.view-section');

    // Login Logic
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simple simulation
        loginScreen.style.display = 'none';
        mainContainer.style.display = 'block';
        initDashboard(); // To be implemented
    });

    // Logout Logic
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mainContainer.style.display = 'none';
        loginScreen.style.display = 'flex';
    });

    // Navigation Logic
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = link.getAttribute('data-view');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show corresponding section
            viewSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${viewId}-view`) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Dashboard Initialization
    function initDashboard() {
        const ctx = document.getElementById('performanceChart').getContext('2d');
        
        // Gradient for chart
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(212, 175, 55, 0.4)');
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                datasets: [{
                    label: 'Faturamento (R$)',
                    data: [850, 1200, 950, 1500, 2100, 3200, 1800],
                    borderColor: '#d4af37',
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#d4af37',
                    pointBorderColor: '#fff',
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: '#a0a0a0'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#a0a0a0'
                        }
                    }
                }
            }
        });
    }

    // Mock Data
    const appointments = [
        { client: 'Ricardo Oliveira', service: 'Corte Degradê', barber: 'Carlos Silva', time: '11/06/2026 14:30', status: 'confirmed' },
        { client: 'Marcos Souza', service: 'Barba Completa', barber: 'João Pedro', time: '11/06/2026 15:15', status: 'pending' },
        { client: 'André Lima', service: 'Corte + Barba', barber: 'Carlos Silva', time: '11/06/2026 16:00', status: 'confirmed' },
        { client: 'Felipe Santos', service: 'Corte Infantil', barber: 'João Pedro', time: '11/06/2026 17:00', status: 'confirmed' }
    ];

    const clients = [
        { name: 'Ricardo Oliveira', phone: '(11) 98888-7777', lastVisit: '10/05/2026', total: 'R$ 450,00' },
        { name: 'Marcos Souza', phone: '(11) 97777-6666', lastVisit: '02/06/2026', total: 'R$ 120,00' },
        { name: 'André Lima', phone: '(11) 96666-5555', lastVisit: '11/06/2026', total: 'R$ 890,00' },
        { name: 'Felipe Santos', phone: '(11) 95555-4444', lastVisit: '05/06/2026', total: 'R$ 210,00' }
    ];

    function populateTables() {
        const appTable = document.getElementById('appointments-table');
        const clientTable = document.getElementById('clients-table');

        appTable.innerHTML = appointments.map(app => `
            <tr>
                <td>${app.client}</td>
                <td>${app.service}</td>
                <td>${app.barber}</td>
                <td>${app.time}</td>
                <td><span class="status-badge status-${app.status}">${app.status === 'confirmed' ? 'Confirmado' : 'Pendente'}</span></td>
                <td>
                    <button class="btn-action"><i class="fas fa-edit"></i></button>
                    <button class="btn-action"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `).join('');

        clientTable.innerHTML = clients.map(client => `
            <tr>
                <td>${client.name}</td>
                <td>${client.phone}</td>
                <td>${client.lastVisit}</td>
                <td>${client.total}</td>
                <td>
                    <button class="btn-action"><i class="fas fa-eye"></i></button>
                    <button class="btn-action"><i class="fas fa-edit"></i></button>
                </td>
            </tr>
        `).join('');
    }

    // Call init if already logged in (for dev)
    if (mainContainer.style.display !== 'none') {
        initDashboard();
        populateTables();
    }

    // Barbers Data
    const barbers = [
        { name: 'Carlos Silva', role: 'Sênior', commission: '40%', rating: 4.9 },
        { name: 'João Pedro', role: 'Pleno', commission: '35%', rating: 4.8 },
        { name: 'Mateus Santos', role: 'Júnior', commission: '30%', rating: 4.7 }
    ];

    function populateBarbers() {
        const grid = document.getElementById('barbers-grid');
        grid.innerHTML = barbers.map(b => `
            <div class="stat-card glass">
                <div class="stat-header">
                    <span>${b.role}</span>
                    <i class="fas fa-star" style="color: var(--primary-gold);"> ${b.rating}</i>
                </div>
                <div class="stat-value" style="font-size: 1.2rem;">${b.name}</div>
                <div class="stat-trend">Comissão: ${b.commission}</div>
                <button class="btn-action" style="margin-top: 10px;">Ver Agenda</button>
            </div>
        `).join('');
    }

    function initReports() {
        const ctx = document.getElementById('servicesChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Corte', 'Barba', 'Combo', 'Outros'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#d4af37', '#b8860b', '#ffffff', '#a0a0a0'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#a0a0a0' }
                    }
                }
            }
        });
    }

    // Update login to call populate
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginScreen.style.display = 'none';
        mainContainer.style.display = 'block';
        initDashboard();
        populateTables();
        populateBarbers();
        initReports();
    });

    // For dev:
    if (mainContainer.style.display !== 'none') {
        initDashboard();
        populateTables();
        populateBarbers();
        initReports();
    }
});

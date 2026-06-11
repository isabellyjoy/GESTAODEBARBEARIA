BarberManager - Sistema de Gestão de Barbearia
📋 Descrição
BarberManager é um sistema web completo e moderno de gestão para barbearias, desenvolvido exclusivamente em HTML, CSS e JavaScript puro, sem dependência de frameworks ou bibliotecas externas. O sistema oferece uma interface dark premium com cores em preto, dourado e branco, inspirada em design SaaS moderno.

O sistema é totalmente responsivo e funciona em todos os navegadores modernos, com dados armazenados localmente via localStorage, permitindo uso offline com sincronização automática.

✨ Características Principais
1. Autenticação e Controle de Acesso
Login seguro com email e senha
Três perfis de usuário: Administrador, Barbeiro e Cliente
Gerenciamento de sessão com persistência
Proteção de rotas por perfil de acesso
2. Dashboard Executivo
KPIs em tempo real:
Total de clientes cadastrados
Agendamentos do dia
Faturamento diário e mensal
Gráficos estatísticos:
Serviços mais realizados
Faturamento por período (últimos 7 dias)
3. Gestão de Clientes
Cadastro completo com dados pessoais
Edição e exclusão de clientes
Busca em tempo real
Histórico de atendimentos
Última visita registrada
4. Gestão de Barbeiros
Cadastro com especialidades
Horários de atendimento configuráveis
Controle de disponibilidade
Gerenciamento de dias de folga
Status ativo/inativo
5. Gestão de Serviços
Cadastro com nome, descrição, preço e duração
Serviços padrão pré-configurados:
Corte Masculino (R$ 50,00 - 30 min)
Barba (R$ 35,00 - 20 min)
Corte + Barba (R$ 75,00 - 50 min)
Sobrancelha (R$ 25,00 - 15 min)
Hidratação Capilar (R$ 60,00 - 40 min)
Edição e exclusão de serviços
6. Sistema de Agendamento
Agendamento online com seleção de:
Data e horário
Barbeiro
Serviço
Validação automática de conflitos de horário
Cancelamento de agendamentos
Reagendamento com liberação de horário anterior
Visualização de horários disponíveis em tempo real
7. Módulo Financeiro
Registro de pagamentos com métodos:
Dinheiro
Cartão
PIX
Cheque
Relatório de faturamento
Controle de caixa com saldo
Resumo mensal
Histórico completo de transações
8. Funcionalidades por Perfil
Administrador
Acesso completo a todos os módulos
Gestão de clientes, barbeiros e serviços
Gerenciamento de agendamentos
Controle financeiro
Gestão de usuários
Barbeiro
Visualização do calendário pessoal
Lista de agendamentos do dia
Cálculo de comissões (20% por atendimento)
Detalhamento de ganhos por serviço
Cliente
Agendamento online
Visualização de agendamentos pessoais
Cancelamento e reagendamento
Histórico de atendimentos
🗂️ Estrutura do Projeto
barber-manager-vanilla/
├── index.html              # Arquivo HTML principal
├── css/
│   └── styles.css         # Estilos CSS (dark premium theme)
├── js/
│   ├── database.js        # Sistema de dados em localStorage
│   ├── auth.js            # Autenticação e gerenciamento de sessão
│   ├── ui.js              # Gerenciamento de interface e navegação
│   └── app.js             # Lógica principal da aplicação
├── docs/
│   ├── diagrama-casos-uso.md
│   ├── diagrama-classes.md
│   └── diagrama-er.md
├── assets/                # Pasta para assets (ícones, imagens)
├── screenshots/           # Capturas de tela
├── README.md             # Este arquivo
└── todo.md               # Lista de tarefas do projeto
🎨 Design e Cores
O sistema utiliza uma paleta de cores dark premium inspirada em design SaaS moderno:

Cor	Código	Uso
Preto	#121212	Fundo principal
Dourado	#D4AF37	Destaques e elementos ativos
Branco	#FFFFFF	Texto principal
Cinza Escuro	#1E1E1E	Sidebar e cards
Cinza Médio	#2D2D2D	Backgrounds secundários
Cinza Claro	#3D3D3D	Borders e textos secundários
🚀 Como Usar
1. Instalação
Não há dependências externas! Basta clonar o repositório e abrir o arquivo index.html no navegador.

# Clonar o repositório
git clone https://github.com/seu-usuario/barber-manager.git

# Abrir no navegador
cd barber-manager-vanilla
# Abra index.html em seu navegador favorito
2. Credenciais de Teste
O sistema vem pré-configurado com usuários de teste:

Perfil	Email	Senha
Administrador	admin@barbearia.com	admin123
Barbeiro	joao@barbearia.com	barbeiro123
Cliente	maria@cliente.com	cliente123
3. Primeiro Acesso
Abra index.html no navegador
Faça login com uma das credenciais de teste
Explore os diferentes módulos conforme seu perfil
Os dados são salvos automaticamente em localStorage
💾 Armazenamento de Dados
O sistema utiliza localStorage do navegador para armazenar todos os dados:

Banco de dados local: Todos os registros são salvos no localStorage
Sincronização automática: Mudanças são salvas instantaneamente
Persistência: Dados permanecem mesmo após fechar o navegador
Exportação: Você pode exportar dados em JSON
Estrutura do Banco de Dados
{
  usuarios: [],        // Usuários do sistema
  clientes: [],        // Clientes cadastrados
  barbeiros: [],       // Barbeiros e suas especialidades
  servicos: [],        // Serviços oferecidos
  agendamentos: [],    // Agendamentos realizados
  pagamentos: [],      // Registros de pagamentos
  caixa: []           // Controle de caixa
}
📱 Responsividade
O sistema é totalmente responsivo e funciona perfeitamente em:

Desktop (1920px+)
Tablet (768px - 1024px)
Mobile (320px - 767px)
A sidebar se transforma em menu hambúrguer em telas pequenas, e todos os elementos se adaptam automaticamente.

🔐 Segurança
Senhas armazenadas localmente (em produção, usar hash)
Sessão persistente com validação
Proteção de rotas por perfil
Validação de entrada em formulários
📊 Funcionalidades Técnicas
Validação de Conflitos de Horário
O sistema verifica automaticamente:

Horários já ocupados por outros agendamentos
Duração do serviço
Disponibilidade do barbeiro
Evita sobreposição de agendamentos
Cálculo de Comissões
Barbeiros recebem 20% de comissão sobre cada atendimento pago:

Cálculo automático
Detalhamento por serviço
Relatório mensal
Gráficos e Estatísticas
Serviços mais realizados (top 5)
Faturamento por período
Tendências de receita
KPIs em tempo real
🛠️ Tecnologias Utilizadas
HTML5: Estrutura semântica
CSS3: Estilos avançados com variáveis CSS
JavaScript ES6+: Lógica da aplicação
localStorage: Persistência de dados
Sem dependências externas: 100% vanilla
📈 Diagramas UML
O projeto inclui diagramas UML completos:

Diagrama de Casos de Uso: Interações entre atores e sistema
Diagrama de Classes: Estrutura de dados e relacionamentos
Diagrama Entidade-Relacionamento (ER): Modelo de banco de dados
Veja a pasta docs/ para mais detalhes.

🎯 Roadmap Futuro
 Integração com banco de dados real (Firebase, Supabase)
 Autenticação OAuth
 Notificações por SMS/Email
 Integração com sistemas de pagamento
 Aplicativo mobile (React Native)
 Dashboard com mais gráficos
 Relatórios em PDF
 Backup automático na nuvem
📝 Exemplos de Uso
Agendar um Serviço (Cliente)
Faça login como cliente
Clique em "Agendar"
Selecione serviço, barbeiro, data e horário
Confirme o agendamento
Veja em "Meus Agendamentos"
Registrar Pagamento (Admin)
Faça login como administrador
Vá para "Financeiro"
Clique em "Registrar Pagamento"
Selecione o agendamento e método de pagamento
Confirme o registro
Visualizar Comissões (Barbeiro)
Faça login como barbeiro
Clique em "Comissões"
Veja total de ganhos e detalhamento por serviço
🐛 Troubleshooting
Dados não estão sendo salvos
Verifique se o localStorage está habilitado no navegador
Tente limpar o cache e recarregar a página
Não consegue fazer login
Verifique as credenciais (veja tabela de teste acima)
Limpe os dados e recarregue a página
Horários não aparecem
Verifique se a data selecionada é futura
Confirme se o barbeiro está ativo
Verifique o horário de funcionamento
📞 Suporte
Para reportar bugs ou sugerir melhorias, abra uma issue no repositório.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Desenvolvido como um sistema completo de gestão para barbearias, com foco em usabilidade e design moderno.

Versão: 1.0.0
Última atualização: Junho 2026
Status: ✅ Produção

import { WhyReduceItem, DigitalToolItem, StepItem, SustainableTip, BenefitItem } from './types';

export const whyReduceItems: WhyReduceItem[] = [
  {
    id: 'eco-resources',
    title: 'Economia de recursos naturais',
    description: 'Redução direta do abate de árvores, do consumo desenfreado de milhares de litros de água e da pegada de carbono associada à produção e transporte de celulose.',
    iconName: 'Trees',
  },
  {
    id: 'cost-reduction',
    title: 'Redução de custos',
    description: 'Economia imediata com a compra de resmas de papel, toners de tinta, manutenção de impressoras, espaço físico para armazenamento e envio de documentos físicos.',
    iconName: 'TrendingDown',
  },
  {
    id: 'document-organization',
    title: 'Organização de documentos',
    description: 'Substituição definitiva de gavetas e caixas empoeiradas por uma árvore de pastas digitais estruturada de forma lógica, limpa e padronizada.',
    iconName: 'FolderCheck',
  },
  {
    id: 'fast-access',
    title: 'Acesso rápido às informações',
    description: 'Buscas por palavras-chave em segundos. Esqueça o tempo gasto procurando pastas físicas em arquivos mortos; encontre tudo instantaneamente.',
    iconName: 'Search',
  },
  {
    id: 'file-security',
    title: 'Maior segurança dos arquivos',
    description: 'Armazenamento digital protegido contra perdas físicas, incêndios ou inundações, reforçado com controle de acesso, criptografia e backups periódicos.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'environmental-sustainability',
    title: 'Sustentabilidade ambiental',
    description: 'Alinhamento imediato com as melhores práticas de ESG (Ambiental, Social e Governança), reduzindo a geração de lixo corporativo e a pegada ecológica.',
    iconName: 'Leaf',
  },
];

export const digitalTools: DigitalToolItem[] = [
  {
    id: 'google-drive',
    name: 'Google Drive',
    description: 'Uma das ferramentas de armazenamento em nuvem mais populares, oferecendo compartilhamento de arquivos simplificado e integração direta com aplicativos de produtividade.',
    mainFeature: 'Colaboração nativa e integração com o ecossistema Google Workspace.',
    category: 'storage',
    iconName: 'HardDrive',
    badge: 'Nuvem',
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    description: 'O serviço de nuvem da Microsoft integrado ao Windows e ao ecossistema Office. Excelente para empresas que usam as ferramentas clássicas no dia a dia.',
    mainFeature: 'Sincronização integrada com aplicativos Microsoft 365 de desktop.',
    category: 'storage',
    iconName: 'Cloud',
    badge: 'Nuvem',
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    description: 'Plataforma pioneira em sincronização ágil de arquivos. Ideal para profissionais criativos e empresas que lidam com arquivos pesados e compartilhamento rápido.',
    mainFeature: 'Sincronização ultraveloz e links de compartilhamento personalizáveis.',
    category: 'storage',
    iconName: 'Box',
    badge: 'Nuvem',
  },
  {
    id: 'google-docs',
    name: 'Google Docs',
    description: 'Editor de textos online que permite criar, formatar e colaborar em documentos em tempo real. Elimina rascunhos em papel e revisões impressas manuais.',
    mainFeature: 'Coautoria simultânea e salvamento automático contínuo na nuvem.',
    category: 'document',
    iconName: 'FileText',
    badge: 'Editor',
  },
  {
    id: 'office-online',
    name: 'Microsoft Office Online',
    description: 'As versões gratuitas e baseadas em navegador do Word, Excel e PowerPoint. Perfeito para trabalhar de qualquer lugar sem instalar softwares locais.',
    mainFeature: 'Visualização e edição compatível com os formatos padrão de mercado (.docx, .xlsx).',
    category: 'document',
    iconName: 'Layers',
    badge: 'Editor',
  },
  {
    id: 'adobe-scan',
    name: 'Adobe Scan',
    description: 'Aplicativo móvel extremamente preciso que transforma a câmera do celular em um scanner inteligente de PDFs, com reconhecimento óptico de caracteres (OCR).',
    mainFeature: 'Reconhecimento automático de textos e conversão em PDFs pesquisáveis.',
    category: 'scanner',
    iconName: 'Smartphone',
    badge: 'Scanner Mobile',
  },
  {
    id: 'camscanner',
    name: 'CamScanner',
    description: 'Ferramenta móvel versátil para escanear, recortar e aprimorar imagens de notas fiscais, contratos, certificados e lousas, gerando documentos super nítidos.',
    mainFeature: 'Corte de bordas inteligente e filtros de aprimoramento de legibilidade.',
    category: 'scanner',
    iconName: 'Camera',
    badge: 'Scanner Mobile',
  },
];

export const howToStartSteps: StepItem[] = [
  {
    stepNumber: 1,
    title: 'Digitalize documentos',
    description: 'Utilize aplicativos de digitalização para celular (como Adobe Scan ou CamScanner) para converter contratos, recibos e anotações físicas em arquivos PDF nítidos.',
    iconName: 'Smartphone',
  },
  {
    stepNumber: 2,
    title: 'Organize em pastas',
    description: 'Crie uma estrutura lógica de diretórios com nomes claros (ex: "Contratos/2026/ClienteX") para que qualquer arquivo possa ser localizado em poucos cliques.',
    iconName: 'FolderClosed',
  },
  {
    stepNumber: 3,
    title: 'Armazene na nuvem',
    description: 'Guarde seus documentos em servidores seguros na nuvem (Google Drive, OneDrive ou Dropbox). Garanta acesso multiplataforma e evite perdas por falha de hardware.',
    iconName: 'CloudLightning',
  },
  {
    stepNumber: 4,
    title: 'Compartilhe com segurança',
    description: 'Em vez de fazer cópias físicas ou imprimir relatórios, envie links seguros com permissões controladas (somente leitura ou edição) para os destinatários.',
    iconName: 'Share2',
  },
  {
    stepNumber: 5,
    title: 'Evite impressões desnecessárias',
    description: 'Adote uma postura reflexiva. Antes de clicar no botão "Imprimir", pergunte-se se a leitura, assinatura ou compartilhamento não podem ser feitos 100% em tela.',
    iconName: 'PrinterOff',
  },
];

export const sustainableTips: SustainableTip[] = [
  {
    id: 'tip-1',
    title: 'Utilize assinaturas digitais',
    description: 'Assine contratos, termos de adesão e declarações de forma eletrônica através de plataformas como o Gov.br ou ferramentas corporativas seguras.',
    iconName: 'PenTool',
  },
  {
    id: 'tip-2',
    title: 'Compartilhe arquivos por links',
    description: 'Em reuniões e apresentações, envie o material digital com antecedência em vez de distribuir cópias impressas de slides ou relatórios longos.',
    iconName: 'Link',
  },
  {
    id: 'tip-3',
    title: 'Prefira formulários online',
    description: 'Colete informações, realize pesquisas de satisfação ou faça inscrições de eventos através do Google Forms, Typeform ou formulários similares.',
    iconName: 'ClipboardSignature',
  },
  {
    id: 'tip-4',
    title: 'Faça backups automáticos',
    description: 'Configure seus aplicativos de nuvem para sincronizar seus dados em tempo real, garantindo segurança total contra acidentes ou quebras de aparelhos.',
    iconName: 'RefreshCw',
  },
  {
    id: 'tip-5',
    title: 'Digitalize comprovantes e contratos',
    description: 'Guarde recibos de despesas, cupons fiscais e ordens de serviço digitalmente. O papel térmico costuma desbotar e se degradar rapidamente com o tempo.',
    iconName: 'CheckSquare',
  },
  {
    id: 'tip-6',
    title: 'Imprima somente quando necessário',
    description: 'Caso precise mesmo imprimir, configure o equipamento para o modo frente-e-verso (duplex), reduza a qualidade da tinta e use papel reciclado.',
    iconName: 'CheckCircle',
  },
];

export const benefitStats: BenefitItem[] = [
  {
    id: 'stat-waste',
    value: '90%',
    label: 'Redução',
    title: 'Menos desperdício',
    description: 'Diminuição gritante de resíduos de papel e rejeitos de toners químicos poluentes de impressoras nos escritórios.',
    iconName: 'Trash2',
  },
  {
    id: 'stat-productivity',
    value: '35%',
    label: 'Ganho',
    title: 'Mais produtividade',
    description: 'Profissionais deixam de executar tarefas repetitivas de arquivamento físico e focam em demandas estratégicas.',
    iconName: 'Flame',
  },
  {
    id: 'stat-time',
    value: '5s',
    label: 'Pesquisa',
    title: 'Economia de tempo',
    description: 'A busca por um documento digitalizado leva segundos através de termos de busca, contra minutos ou horas no arquivo físico.',
    iconName: 'Hourglass',
  },
  {
    id: 'stat-access',
    value: '100%',
    label: 'Mobilidade',
    title: 'Facilidade de acesso',
    description: 'Acesse seus arquivos importantes em qualquer lugar, do computador, tablet ou celular, bastando uma conexão à internet.',
    iconName: 'Smartphone',
  },
  {
    id: 'stat-collab',
    value: '24/7',
    label: 'Conexão',
    title: 'Colaboração em tempo real',
    description: 'Membros da equipe editam a mesma planilha, texto ou apresentação simultaneamente, sem ruídos ou versões duplicadas.',
    iconName: 'Users',
  },
  {
    id: 'stat-impact',
    value: '10k+',
    label: 'Litros H₂O',
    title: 'Menor impacto ambiental',
    description: 'Milhares de litros de água, produtos químicos branqueadores e árvores preservadas a cada tonelada de papel economizada.',
    iconName: 'Sprout',
  },
];

// TODO: Consertar reader view

import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';
import ProportionalVideo from './ProportionalVideo';
import ContentCard from '../content-card/ContentCard';
import ProcessTab from './ProcessTab';
import RibbonLink from './RibbonButton';
import Carousel, { CarouselItem } from '../structure/Carousel';

import Image01 from '../../assets/pictures/a_img01.jpg';
import Image02 from '../../assets/pictures/a_img02.jpg';
import Separacao01 from '../../assets/pictures/foto04.JPG';
import Separacao02 from '../../assets/pictures/foto02.JPG';
import Separacao03 from '../../assets/pictures/foto08.JPG';

import randomizeArray from '../../lib/random';
import subjectsData from '../../assets/subjects-data';

import styles from './styles/process.module.scss';
import progressBarStyles from './styles/progress-bar.module.scss';

const getExponentialPercentage = x => {
  const a = 5;
  return (a ** x - 1) / (a - 1);
};

const getClampedPercentage = value => Math.min(Math.max(value, 0), 1);

class Process extends React.Component {
  static propTypes = {
    showProgressBar: PropTypes.bool,
    mergeHeader: PropTypes.bool,
    handleGoToProcess: PropTypes.func.isRequired,
  };

  static defaultProps = {
    showProgressBar: false,
    mergeHeader: false,
  };

  state = {
    scrollCoverHeight: 0,
    tabTitle: 'Como Funciona',
  };

  randomized = randomizeArray(subjectsData);

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.sections = this.getSections();
    this.calculateScrollCoverHeight();
    this.updateTabTitle();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  getSections = () => ({
    sectionA: document.querySelector('#section-a'),
    sectionB: document.querySelector('#section-b'),
    sectionC: document.querySelector('#section-c'),
  });

  getExponentialScrollPercentages = () => {
    const currentScroll = window.scrollY + (window.innerHeight - 88);

    const progressA =
      (currentScroll - this.sections.sectionA.offsetTop) /
      this.sections.sectionA.offsetHeight;
    const progressB =
      (currentScroll - this.sections.sectionB.offsetTop) /
      this.sections.sectionB.offsetHeight;
    const progressC =
      (currentScroll - this.sections.sectionC.offsetTop) /
      this.sections.sectionC.offsetHeight;

    const expoA = getClampedPercentage(getExponentialPercentage(progressA));
    const expoB = getClampedPercentage(getExponentialPercentage(progressB));
    const expoC = getClampedPercentage(getExponentialPercentage(progressC));

    return [expoA, expoB, expoC];
  };

  handleScroll = () => {
    const percentages = this.getExponentialScrollPercentages();

    const progressElements = [
      document.querySelector('#progress-item-progress-a'),
      document.querySelector('#progress-item-progress-b'),
      document.querySelector('#progress-item-progress-c'),
    ];

    const icons = [
      document.querySelector('#progress-item-icon-a'),
      document.querySelector('#progress-item-icon-b'),
      document.querySelector('#progress-item-icon-c'),
    ];

    const aActive = percentages[0] > 0 && !percentages[1];
    const bActive = percentages[1] > 0 && !percentages[2];
    const cActive = percentages[2] > 0 && !bActive;

    // iOS doesn't like me setting style directly 🤔
    progressElements[0].style.width = `${percentages[0] * 100}%`;
    progressElements[1].style.width = `${percentages[1] * 100}%`;
    progressElements[2].style.width = `${percentages[2] * 100}%`;

    icons[0].classList.toggle(progressBarStyles.active, aActive);
    icons[1].classList.toggle(progressBarStyles.active, bActive);
    icons[2].classList.toggle(progressBarStyles.active, cActive);
  };

  handleResize = () => {
    this.calculateScrollCoverHeight();
    this.updateTabTitle();
  };

  calculateScrollCoverHeight = () => {
    const pullTabHeight = 64;
    const marginBottom = 24;

    const browserHeight = document.documentElement.clientHeight;
    const scrollCoverHeight = browserHeight - (pullTabHeight + marginBottom);

    if (this.state.scrollCoverHeight !== scrollCoverHeight) {
      this.setState({ scrollCoverHeight });
    }
  };

  updateTabTitle = () => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const tabTitle = isDesktop
      ? 'Como a Coleta Seletiva Funciona'
      : 'Como Funciona';

    if (this.state.tabTitle !== tabTitle) {
      this.setState({ tabTitle });
    }
  };

  handleBarItemClick = id => {
    const to = document.querySelector(id).offsetTop;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const drawerMenuOffset = 43 + (isDesktop ? 16 : 0);

    window.scrollTo({ top: to - drawerMenuOffset, behavior: 'smooth' });
  };

  render() {
    const { scrollCoverHeight, tabTitle } = this.state;
    const {
      showProgressBar,
      mergeHeader,
      handleGoToProcess,
      ...passthrough
    } = this.props;

    return (
      <div className={styles.container}>
        <ProgressBar
          show={showProgressBar}
          handleClick={this.handleBarItemClick}
        />
        <div style={{ height: scrollCoverHeight }} />
        <ProcessTab
          title={tabTitle}
          disappear={mergeHeader}
          handleClick={handleGoToProcess}
        />
        <article
          id="process"
          className={`${styles.content} ${!mergeHeader ? styles.hide : ''}`}
          {...passthrough}
        >
          <section className={styles.readingRow}>
            <h2 className={styles.title}>Veja o vídeo!</h2>
            <p>
              Nesse vídeo, produzido pelo integrante do grupo Gabriel Fernandes,
              você vê de perto como funciona o sistema de Coleta Seletiva dentro
              do CEFET/RJ Maracanã
            </p>
          </section>

          <div className={`${styles.fullRow} ${styles.restrict}`}>
            <ProportionalVideo ratio={9 / 16} className={styles.columnSingle} />
          </div>

          <div className={styles.rowSeparator} />

          <section id="section-a">
            <div className={styles.readingRow}>
              <h2 className={styles.title}>Geração</h2>
              <p>
                Todos nós, ao longo de um dia, somos responsáveis pela produção
                de grande quantidade de lixo. Poucos se dão conta do volume
                daquilo que produzimos diariamente... Muitos desses materiais
                podem ser ainda reciclados, daí surgindo a ideia de fazer uma
                coleta seletiva.
              </p>
              <p>
                Os resíduos produzidos mais comuns são descartados nas lixeiras
                azuis e amarelas distribuídas ao longo do CEFET/RJ. Mas atenção!
                Na lixeira amarela devem ser colocados materiais que poderão ser
                recicláveis (chamado &quot;lixo seco&quot;), enquanto nas azuis
                os materiais que não são recicláveis (&quot;lixo úmido&quot;).
                Se ficar na dúvida, consulte as imagens a seguir:
              </p>
            </div>
            <div className={`${styles.fullRow} ${styles.restrict}`}>
              <img
                className={`${styles.columnHalf} ${styles.elevatedImg}`}
                src={Image01}
                alt="Ilustração mostrando exemplo de materiais recicláveis"
              />
              <img
                className={`${styles.columnHalf} ${styles.elevatedImg}`}
                src={Image02}
                alt="Ilustração mostrando exemplo de materiais não recicláveis"
              />
            </div>
            <div className={styles.readingRow}>
              <p>
                Materiais mais específicos como pilhas, óleo de cozinha e
                eletrônicos possuem pontos de coleta definidos. Fique sabendo
                onde eles estão:
              </p>
              <ul>
                <li>Pilha - Prefeitura e restaurante</li>
                <li>Óleo de cozinha - Pavilhão de Segurança do Trabalho</li>
                <li>
                  Resíduo eletrônico - Biblioteca, SECAD e na incubadora de
                  empresas
                </li>
              </ul>
            </div>

            <div className={styles.rowSeparator} />

            <div className={styles.readingRow}>
              <h2 className={styles.title}>Depoimentos</h2>
            </div>

            <Carousel>
              {this.randomized.map(content => (
                <CarouselItem>
                  <ContentCard key={content.name} info={content} />
                </CarouselItem>
              ))}
            </Carousel>
          </section>

          <div className={styles.rowSeparator} />

          <section id="section-b">
            <div className={styles.readingRow}>
              <h2 className={styles.title}>Separação</h2>
              <p>
                O primeiro responsável pela separação do material é... VOCÊ!
                Isso mesmo! A destinação correta do que é reciclável ou não é a
                primeira parte desta cadeia.
              </p>
              <p>
                A partir daí, a equipe de trabalhadores terceirizados da limpeza
                realiza a coleta interna e o armazenamento deste material até
                chegar ao seu destino. Atualmente o responsável por esta
                importante etapa é o Fernando.
              </p>
            </div>

            <div className={`${styles.fullRow} ${styles.restrict}`}>
              <RibbonLink
                to="/galeria"
                title="Veja todas as fotos na galeria"
              />
            </div>

            <div className={`${styles.fullRow} ${styles.restrict}`}>
              <img
                className={`${styles.columnThird} ${styles.elevatedImg}`}
                src={Separacao01}
                alt=""
              />
              <img
                className={`${styles.columnThird} ${styles.elevatedImg}`}
                src={Separacao02}
                alt=""
              />
              <img
                className={`${styles.columnThird} ${styles.elevatedImg}`}
                src={Separacao03}
                alt=""
              />
            </div>
          </section>

          <div className={styles.rowSeparator} />

          <section id="section-c" className={styles.readingRow}>
            <h2 className={styles.title}>Coleta</h2>
            <p>
              Os resíduos recicláveis produzidos pela comunidade cefetiana são
              destinados a associações/cooperativas de catadores de materiais
              recicláveis. Estas cooperativas são selecionadas através de um
              edital com chamada pública e divulgado pela instituição. Todo o
              processo é coordenado pela Comissão Central de Coleta Seletiva
              Solidária do CEFET/RJ, presidida pela profª Aline Guimarães
              Monteiro Trigo
            </p>
            <p>
              Atualmente as cooperativas que recebem os materiais recicláveis
              são COOPQUITUNGO – Cooperativa de Trabalho Coopquitungo Cooperando
              e Reciclando Rio Ltda (CNPJ 09347750/0001-09) e a COOPEMBAU –
              Cooperativa de Trabalho e Produção dos Catadores de Materiais
              Recicláveis da Pavuna (CNPJ 23189494/0001-08), selecionadas a
              partir do edital nº 1/2018.
            </p>
            <p>
              Para maiores informações, visite a página da CCCSS de CEFET/RJ:
              <br />
              <a
                href="http://www.cefet-rj.br/index.php/apresentacao-cccss"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.cefet-rj.br/index.php/apresentacao-cccss
              </a>
            </p>
          </section>
        </article>
      </div>
    );
  }
}

export default Process;

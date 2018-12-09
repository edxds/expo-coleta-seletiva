// TODO: Consertar reader view

import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';
import ProportionalVideo from './ProportionalVideo';
import ContentCard from '../content-card/ContentCard';
import ProcessTab from './ProcessTab';
import RibbonLink from './RibbonButton';

import Image01 from '../../assets/pictures/a_img01.jpg';
import Image02 from '../../assets/pictures/a_img02.jpg';
import Separacao01 from '../../assets/pictures/foto04.JPG';
import Separacao02 from '../../assets/pictures/foto02.JPG';
import Separacao03 from '../../assets/pictures/foto08.JPG';

import randomizeArray from '../../lib/random';
import subjectsData from '../../assets/subjects-data';
import './styles/process.scss';

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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.sections = this.getSections();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getSections = () => ({
    sectionA: document.querySelector('#section-a'),
    sectionB: document.querySelector('#section-b'),
    sectionC: document.querySelector('#section-c'),
  });

  getExponentialPercentage = x => {
    const a = 5;
    return (a ** x - 1) / (a - 1);
  };

  getClampedPercentage = value => Math.min(Math.max(value, 0), 1);

  handleScroll = () => {
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

    const aExpo = this.getClampedPercentage(
      this.getExponentialPercentage(progressA)
    );
    const bExpo = this.getClampedPercentage(
      this.getExponentialPercentage(progressB)
    );
    const cExpo = this.getClampedPercentage(
      this.getExponentialPercentage(progressC)
    );

    const progresses = [
      document.querySelector('#progress-item-progress-a'),
      document.querySelector('#progress-item-progress-b'),
      document.querySelector('#progress-item-progress-c'),
    ];

    const icons = [
      document.querySelector('#progress-item-icon-a'),
      document.querySelector('#progress-item-icon-b'),
      document.querySelector('#progress-item-icon-c'),
    ];

    const aActive = aExpo > 0 && !bExpo;
    const bActive = bExpo > 0 && !cExpo;
    const cActive = cExpo > 0 && !bActive;

    // iOS doesn't like me setting style directly 🤔
    progresses[0].style.width = `${aExpo * 100}%`;
    progresses[1].style.width = `${bExpo * 100}%`;
    progresses[2].style.width = `${cExpo * 100}%`;

    icons[0].classList.toggle('active', aActive);
    icons[1].classList.toggle('active', bActive);
    icons[2].classList.toggle('active', cActive);
  };

  handleBarItemClick = id => {
    const to = document.querySelector(id).offsetTop;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const drawerMenuOffset = 43 + (isDesktop ? 16 : 0);

    window.scrollTo({ top: to - drawerMenuOffset, behavior: 'smooth' });
  };

  render() {
    const randomized = randomizeArray(subjectsData);

    const pullTabHeight = 64;
    const browserHeight = document.documentElement.clientHeight;

    const shouldCompensate = window.matchMedia('(min-width: 768px)').matches;
    const compensation = pullTabHeight + (shouldCompensate ? 56 : 0);

    const scrollCoverHeight = browserHeight - compensation;

    const {
      showProgressBar,
      mergeHeader,
      handleGoToProcess,
      ...passthrough
    } = this.props;

    return (
      <div className="process">
        <ProgressBar
          show={showProgressBar}
          handleClick={this.handleBarItemClick}
        />
        <div
          className="process-scroll-cover"
          style={{ height: scrollCoverHeight }}
        />
        <article
          className={`process-container ${mergeHeader ? 'show-bg' : ''}`}
          {...passthrough}
        >
          <ProcessTab
            title="Como Funciona"
            disappear={mergeHeader}
            handleClick={handleGoToProcess}
          />

          <section className="content-section">
            <h2>Veja o vídeo!</h2>
            <p>
              Nesse vídeo, produzido pelo integrante do grupo Gabriel Fernandes,
              você vê de perto como funciona o sistema de Coleta Seletiva dentro
              do CEFET/RJ Maracanã
            </p>
          </section>

          <div className="video-container">
            <ProportionalVideo ratio={9 / 16} />
          </div>

          <section id="section-a">
            <div className="content-section">
              <h2>Geração</h2>
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
              <div className="photos-container">
                <img
                  src={Image01}
                  alt="Ilustração mostrando exemplo de materiais recicláveis"
                />
                <img
                  src={Image02}
                  alt="Ilustração mostrando exemplo de materiais não recicláveis"
                />
              </div>
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

            <div className="content-section">
              <h2>Depoimentos</h2>
            </div>

            <div className="content-card-container">
              {randomized.map(content => (
                <ContentCard key={content.name} info={content} />
              ))}
            </div>
          </section>

          <section id="section-b">
            <div className="content-section">
              <h2>Separação</h2>
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

            <RibbonLink to="/galeria" title="Veja todas as fotos na galeria" />

            <div className="photos-container big">
              <img className="big" src={Separacao01} alt="" />
              <img className="big" src={Separacao02} alt="" />
              <img className="big" src={Separacao03} alt="" />
            </div>
          </section>

          <section id="section-c" className="content-section">
            <h2>Coleta</h2>
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

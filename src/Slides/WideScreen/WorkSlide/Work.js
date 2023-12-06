import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'Okko',
        projectDesc: 'Найкращий партнер для креативної та талановитої студії! Дякуємо! Ви надіхаєте нас бути кращіми!',
        projectType: 'Web-You Team......',
        roles: ['Окко для людей', 'Люди для ідей'],
      },
      {
        number: '02',
        projectName: 'Web-you',
        projectDesc: "У Web-you ми пишаємося нашою командою висококласних фахівців у галузі менеджменту та технологій! Познайомтеся з деякими з нас...",
        projectType: '<a href="https://team.web-you.pl" style="color: black; text-decoration: none;">team.web-you.pl</a>',
        roles: ['Наша цілісність'],
      },
      {
        number: '03',
        projectName: 'Зв’язок між нами та ОККО',
        projectDesc: 'Ми розділяємо погляд ОККО на світ. Ми якісні, стрімкі та сучасні! Ми прагнемо зробити світ кращим! Все, як в сім’ї ОККО!',
        projectType: 'Наші досягнення ніжче ↓',
        roles: ['Наші послуги', 'Потреби великої компаніі'],
      },
      {
        number: '04',
        projectName: 'Портфоліо Web-You',
        projectDesc: 'Представимо Вам кілька проектів, якими пишаються наші засовники',
        projectType: 'Портфоліо налічує  > 100 проектів',
        roles: ['Креативність та технології'],
      },
      {
        number: '05',
        projectName: 'Портфоліо Web-You',
        projectDesc: 'Втілюючи в життя найсміливіші ідеї наших клієнтів…',
        projectType: '<a href="https://web-you.pl" style="color: black; text-decoration: none;">web-you.pl</a>',
        roles: ['Автоматизація', 'Робототехніка'],
      },
      {
        number: '06',
        projectName: 'Електроніка та комплектуючі',
        projectDesc: 'У Web-You імпорт електроніки від продуцентів зе всього світу здійснюється матерінською компанією',
        projectType: '<a href="https://new.k-it.com.ua" style="color: black; text-decoration: none;">new.k-it.com.ua</a>',
        roles: ['K-iT', 'Web-You'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;

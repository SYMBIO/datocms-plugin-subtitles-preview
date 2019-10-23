import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connectToDatoCms from './connectToDatoCms';
import './style.css';

@connectToDatoCms(plugin => ({
  developmentMode: plugin.parameters.global.developmentMode,
  itemId: plugin.itemId,
  itemType: plugin.itemType.id,
}))

export default class Main extends Component {
  static propTypes = {
    itemId: PropTypes.string.isRequired,
    itemType: PropTypes.string.isRequired,
  };

  fetchScreen(type, id = 0) {
    const url = `https://nd-test.symbio.now.sh/api/subtitles/proxy?type=${type}${id ? `&id=${id}` : ''}`;
    window.open(url, '_blank', 'width=1024,height=600,menubar=no,toolbar=no,location=no,personalbar=no,status=no,chrome=yes,modal=yes');
  }

  render() {
    const { itemType, itemId } = this.props;

    switch (itemType) {
      case '111456': // inscenace
        return (
          <div className="container">
            <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('home', `p${itemId}`)}>Úvodní stránka představení</button><br/>
            <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('currentplay', `p${itemId}`)}>O představení</button><br/>
            <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('participants', `p${itemId}`)}>Obsazení</button><br/>
            <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('participantdetail', `p${itemId}`)}>Detail umělce</button>
          </div>
        );

      case '132936': // obecne obrazovky
        switch (itemId) {
          case '1498202': // o ND
            return (
              <div className="container">
                <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('theatreinfo')}>Otevřít náhled</button>
              </div>
            );

          case '1498210': // o SO
            return (
              <div className="container">
                <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('info')}>Otevřít náhled</button>
              </div>
            );

          default:
            return <></>;
        }

      case '138076': // uvitaci obrazovka
        return (
          <div className="container">
            <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('welcome')}>Otevřít náhled</button>
          </div>
        );

      default:
        return (
          <div className="container">
            <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('home', itemId)}>Úvodní stránka představení</button><br/>
            <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('currentplay', itemId)}>O představení</button><br/>
            <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('participants', itemId)}>Obsazení</button><br/>
            <button type="button" className="DatoCMS-button DatoCMS-button--micro" onClick={() => this.fetchScreen('participantdetail', itemId)}>Detail umělce</button>
          </div>
        );
    }
  }
}

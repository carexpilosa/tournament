import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import './readmore.css';

class ReadMore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialized: false,
      actLongViewHeight: null,
      longView: false
    };
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const strippedContent = sanitizeHtml(this.myRef.innerHTML, {
      allowedTags: [ 'ol', 'ul', 'li' ],
      allowedAttributes: [],
      textFilter: (text) => text.replace(/$/, ' ')
    });

    this.setState({
      initialized: true,
      actLongViewHeight: this.myRef.getBoundingClientRect().height,
      strippedContent
    });
  }

  render() {
    const content = this.state.longView || !this.state.initialized ?
      this.props.children : <span dangerouslySetInnerHTML={{__html: this.state.strippedContent}}></span>;
    return (
      <div>
        <div className={this.state.longView ? '' : 'divRefShort'}
          ref={(elm) => { this.myRef = elm; }}
          style={{
            visibility: this.state.initialized ? 'visible' : 'hidden',
            height: this.state.longView && this.state.initialized ? '' :
              this.props.shortViewHeight,
            overflow: 'hidden',
            lineHeight: this.state.longView && this.state.initialized ? '' : '1'
          }}
        >
          {content}
        </div>
        <a href="javascript:;" onClick={this.onclick.bind(this)}
          title={
            this.state.longView ? this.props.readLessLabel : this.props.readMoreLabel}
        >
          {this.props.ellipsis}
        </a>
      </div>
    );
  }

  onclick() {
    this.setState({
      longView: !this.state.longView
    });
  }
}

ReadMore.PropTypes = {
  shortViewHeight: PropTypes.string,
  ellipsis: PropTypes.any,
  readMoreLabel: PropTypes.string,
  readLessLabel: PropTypes.string
};

ReadMore.defaultProps = {
  shortViewHeight: '3em',
  ellipsis: '----',
  readMoreLabel: 'read more...',
  readLessLabel: 'read less...'
};

export default ReadMore;

import React from 'react';

class Download extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.props));
    return (
      <div>
        <a href={dataStr} download="file.json">download</a>
      </div>
    );
  }
}

export default Download;

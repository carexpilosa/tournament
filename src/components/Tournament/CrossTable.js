import React from 'react';

class CrossTable extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const players = this.props.players;
    return (
      <div>
        <h4>Cross Table</h4>
        <table>
          <tbody>
          <tr><td></td>
        {
          players.map((sp, idx) => {
            return <td style={{
              border: '2px solid black',
              fontWeight: 'bold'
            }} key={idx}>{sp.name.substr(0,4)}...</td>;
          })
        }
        </tr>
        {
          players.map((sp, idx) => {
            return <tr key={`${idx}-1`}><td 
              style={{
                border: '2px solid black',
                textAlign: 'right',
                fontWeight: 'bold'
              }}>{idx}. {sp.name}</td>
            {
              players.map((sp, index) => {
                const res = this.props.results.filter(result => {
                  return result.whiteID === idx && result.blackID === index;
                });
                let resWhite = '-',
                  resBlack = '-';
                
                if (res.length) {
                  const matchingResult = res[res.length-1];
                  console.log(matchingResult);
                  if (matchingResult.result !== -1) {
                    resWhite = matchingResult.result;
                    resBlack = 1 - matchingResult.result;
                  }
                }
                return (
                  <td style={{border: '2px solid black', textAlign: 'center'}} 
                  key={`${idx}-${index}`}>{idx === index ? 'X' : `${resWhite} : ${resBlack}`}</td>
                );
              })
            }
            </tr>;
          })
        }
        </tbody>
        </table>
      </div>
    );
  }
}

export default CrossTable;
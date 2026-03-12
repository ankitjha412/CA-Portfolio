import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div className="what-content">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>Financial Reporting</h3>
              <h4>Profit and Loss Statement, Balance Sheet, Cash Flow Statement, etc.</h4>
              <ul className="about-points">
                <li>Manage monthly, quarterly, and annual book closures with financial analysis.</li>
                <li>Prepare standalone and consolidated financial statements (Balance Sheet, P&L, Cash Flow).</li>
                <li>Ensure compliance with Ind AS, IFRS, and SEBI reporting requirements.</li>
                <li>Coordinate with statutory auditors, internal auditors, and cross-functional teams.</li>
                <li>Provide financial insights and analysis to support management decisions.</li>
                <li>Prepare financial reports for the board of directors and key stakeholders.</li>
                <li>Maintain accuracy and completeness of financial statements.</li>
                <li>Ensure compliance with applicable financial laws and regulations.</li>
              </ul>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Financial Reporting</div>
                <div className="what-tags">Ind AS, IFRS, IGAAP</div>
                <div className="what-tags">Standalone and Consolidated Financial Statements</div>
                <div className="what-tags">SEBI compliance Financial Statements</div>
                <div className="what-tags">Month-end Closures (T+3)</div>
                <div className="what-tags">Financial planning and Analysis</div>
                <div className="what-tags">MIS and variance analysis</div>
                <div className="what-tags">Audit coordination and Internal control</div>
                                <div className="what-tags">Audit coordination and Internal control</div>

              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div className="what-content">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

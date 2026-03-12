import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>
                Assistant Manager - Finance & Accounts</h4>
                <h5>Escorts Kubota Limited · Full-time</h5>
              </div>
              <h3>2023-2026</h3>
            </div>
           <ul>
            <li> Manage end-to-end monthly, quarterly, and annual financial closures, consistently delivering T+3 closes with strong analytical review of P&L and balance sheet movements.
            </li>
            <li>Prepare standalone financial statements and coordinate group consolidation of overseas subsidiaries, associates, and joint ventures in compliance with Ind AS and IFRS.</li>
            <li>Handle general ledger reviews, inter-company reconciliations, and elimination entries, ensuring accuracy, completeness, and audit readiness.</li>
            <li>Manage SEBI-compliant financial reporting, including preparation of quarterly, half-yearly, and annual results and support for Board and Audit Committee presentations.
            </li>
            <li>Prepare workings and documentation for Related Party Transactions, including Board omnibus approvals and periodic RPT reporting in line with Ind AS.</li>
            <li>Act as the primary finance SPOC for statutory auditors, internal auditors, and cross-functional teams, ensuring timely audit closures with zero material audit observations.
            </li>
            <li>Ensure accurate and timely financial reporting to Kubota Group (Japan), maintaining high standards of governance, compliance, and disclosure.
            </li>
            <li>Lead inventory physical verification in line with J-SOX requirements, analyze inventory variances, and drive corrective actions.</li>
           </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>
                Articleship (Chartered Accountant)</h4>
                <h5>Saha & Co. (Chartered Accountant) · Full-time</h5>
              </div>
              <h3>2016-2019</h3>
            </div>
            <ul>
              <li>Executed statutory, internal, and tax audits across multiple industries, including preparation of CARO 2020–compliant audit reports.</li>
              <li>Prepared and reviewed 20+ tax audit reports (Forms 3CA/3CB & 3CD) and 100+ income tax returns for corporate and non-corporate clients.</li>
              <li>Conducted PPE audits, inventory physical verification, and site visits in accordance with Ind AS requirements.</li>
              <li>Assisted in finance, tax, and corporate due diligence engagements supporting investment and acquisition decisions.
              </li>
              <li>Coordinated directly with clients and audit seniors, developing strong stakeholder management and professional communication skills.</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;

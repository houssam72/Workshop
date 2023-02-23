/* eslint-disable react/prop-types */
/*eslint-disable*/
import React, { Component } from 'react'








class Sondage extends Component {
  constructor(props) {
    super(props)
   this.state
    
  }

  cancel = () => {
    // this.props.history.push('/Annonces')
  }

 

  componentDidMount = () => {}



    render=()=>{

    return (
      <div className="with-footer">
        {this.state.isIntoStep0 && <div>{alertDialogStep0}</div>}
        <div className="layout annonce-form" id="root-form">
          <div className="header-page header-annonce">
            <div className="ctnr put-inline">
              <div className="headerPage-left put-inline">
                <h1 className="clr-txt2 fnt-45 b txt-cntr">
                  {"rca"}
                </h1>
              </div>
            </div>
          </div>

          <div className="blc-annonce-form ">
           
            <div className="blc-content-tab tab-standard-header mb-30px">
              <div className="blc-tab-title centered blc-tab-spec-secondary">
                <ul>
                  <li
                    className={
                    //   this.state.menuItemSelected === 1
                    //     ? 'active clr-dark-purple f-list'
                         'active clr-dark-purple f-list clickable'
                    }
                    // onClick={() => {
                    //   this.handleSaveEtape2()
                    //   this.setState(
                    //     {
                    //       menuItemSelected: 1,
                    //       nextStep: 1
                    //     },
                    //     () => this.toTopPage()
                    //   )
                    // }}
                    // role="presentation"
                  >
                    
                      <div className="steps">
                        <span>{"step1"}</span> 1
                      </div>
                    
                    <div className="step-title">Mode de publication</div>
                  </li>
                  {/* <li
                    className={`
                    ${
                      this.state.menuItemSelected === 1
                        ? 'clr-brown-grey clickable'
                        : ''
                    } 
                    ${
                      this.state.menuItemSelected === 2
                        ? 'active clr-dark-purple f-list'
                        : ''
                    } 
                    ${
                      this.state.menuItemSelected === 3
                        ? 'active clr-dark-purple f-list clickable'
                        : ''
                    }
                    `}
                    onClick={() => {
                      if (this.state.menuItemSelected === 3) {
                        this.handleSaveEtape3()
                        this.setState(
                          {
                            menuItemSelected: 2,
                            nextStep: 2,
                            title: this.state.title ? this.state.title : '',
                            validation: true
                          },
                          () => {
                            this.toTopPage()
                            this.handleDiscipline()
                          }
                        )
                      } else {
                        this.setState({
                          validation: false
                        })
                      }
                    }}
                    role="presentation"
                  >
                    {this.state.menuItemSelected === 3 ? (
                      <div className="steps">
                        <i className="check-step" />
                      </div>
                    ) : (
                      <div className="steps">
                        <span>{t('step')}</span> 2
                      </div>
                    )}
                    <div className="step-title">
                      {this.state.initialValues1.type === 'EXPERTISE_MISSION' &&
                      'Créer votre annonce'}
                      {this.state.initialValues1.type === 'JOB_OFFER' &&
                      'Profil recherché'}
                    </div>
                  </li>
                  <li
                    className={
                      this.state.menuItemSelected === 3
                        ? 'active clr-dark-purple s-list'
                        : 'clr-brown-grey clickable'
                    }
                    role="presentation"
                  >
                    <div className="steps">
                      <span>{t('step')}</span> 3
                    </div>
                    <div className="step-title">
                      {this.state.initialValues1.type === 'EXPERTISE_MISSION' &&
                      "Modalités d'éxécution"}
                      {this.state.initialValues1.type === 'JOB_OFFER' &&
                      'Modalités du poste'}
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        <FooterHome />
      </div>
    )
                                }
  
}

export default Sondage

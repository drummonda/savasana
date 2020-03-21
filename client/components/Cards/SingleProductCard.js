import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card, Icon, Image, Button, Modal, Form} from 'semantic-ui-react'

class SingleProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      quantity: '1',
      showNotification: false
    }
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }
  openModal() {
    this.setState({
      showModal: true
    })
  }
  render() {
    return (
      <Card className="single-card-tile">
        <Image src={this.props.studio.imageUrl} class="ui small image" wrapped ui={false} />
        <Card.Content extra>
          <div className="left-aligned-button">
              <Modal
                open={this.state.showModal}
                trigger={
                  <Button
                    className="home-details-btn"
                    onClick={() => this.setState({showModal: true})}
                  >
                    {this.props.studio.name}
                  </Button>
                }
              >
                <Modal.Header>
                  <div className="species-name">
                    {this.props.studio.name}
                  </div>
                  <i
                    id="exit-modal"
                    className="modal-close window close icon"
                    onClick={() => this.setState({showModal: false})}
                  />
                  <div className="clear" />
                </Modal.Header>
                <Modal.Content image>
                  <div className="image content" id="modal-image">
                    <Image src={this.props.studio.imageUrl} />
                  </div>
                  <div className="desc-modal-right">
                    <div className="modal-description">
                      <Modal.Description>
                        <p>{this.props.studio.description}</p>
                      </Modal.Description>
                    </div>
                  </div>
                  <div className="clear" />
                </Modal.Content>
              </Modal>
            </div>
        </Card.Content>
      </Card>
    )
  }
}

const mapState = state => ({
  user: state.user.currentUser,
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(SingleProductCard)

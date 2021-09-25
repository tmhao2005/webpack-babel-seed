import React, { Component } from "react";
import { connect } from "react-redux";

class Sidebar extends Component<any, any> {
  handleProductSelection(product) {
    this.props.props.history.push(product.path);
  }

  renderProducts = () => {
    if (this.props.products) {
      return this.props.products.map((product, idx) => {
        return (
          <li key={idx} onClick={() => this.handleProductSelection(product)}>
            {product.label}
          </li>
        );
      });
    }
  };

  render() {
    return (
      <div className="sidebar">
        <div className="profileWrap">
          <div>
            <div className="userNameWrap">
              <span className="userName">
                {this.props.firstName} {this.props.lastName}
              </span>
              <span className="angleIcon"></span>
            </div>
            <div className="userInfoWrap">
              <ul>
                <li>My profile</li>
                <li>Help with Console</li>
                <li>Contact us</li>
                <li>Log out</li>
              </ul>
            </div>
            <div className="divisionWrap">Division:</div>
          </div>
        </div>
        <div className="sidebarNavigation">
          <ul>
            <li>
              <div className="mainMenu">
                <span className="menuName">Home</span>
              </div>
            </li>
            <li>
              <div className="mainMenu">
                <span className="menuName">Mosaic Insights</span>
                <span className="angleIcon"></span>
              </div>
              <div className="subMenu">
                <ul>{this.renderProducts()}</ul>
              </div>
            </li>
            <li>
              <div className="mainMenu">
                <span className="menuName">Application Manager</span>
                <span className="angleIcon"></span>
              </div>
              <div className="subMenu">
                <ul>{this.renderProducts()}</ul>
              </div>
            </li>
            <li>
              <div className="mainMenu">
                <span className="menuName">Call Recording</span>
                <span className="angleIcon"></span>
              </div>
              <div className="subMenu">
                <ul>{this.renderProducts()}</ul>
              </div>
            </li>
            <li>
              <div className="mainMenu">
                <span className="menuName">Console Administration</span>
                <span className="angleIcon"></span>
              </div>
              <div className="subMenu">
                <ul>{this.renderProducts()}</ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.auth.userAuth.firstName,
    lastName: state.auth.userAuth.lastName,
    products: state.meta.productsMeta,
  };
};

export default connect(mapStateToProps)(Sidebar);

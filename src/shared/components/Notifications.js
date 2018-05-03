import React from "react";
import { ToastContainer } from "react-toastr";
import { connect } from "react-redux";
import { getNotification } from "src/reducers/notificationReducer";

class Notifications extends React.Component {
  componentWillReceiveProps(nextProps) {
    const notification = nextProps.notification;
    switch (notification.type) {
      case "error":
        this.refs.container.error(notification.message);
        break;
      case "warning":
        this.refs.container.warning(notification.message);
        break;
      case "info":
        this.refs.container.info(notification.message);
        break;
      case "success":
        this.refs.container.success(notification.message);
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <ToastContainer ref="container" className="toast-top-right" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notification: getNotification(state)
});

export default connect(mapStateToProps, null)(Notifications);

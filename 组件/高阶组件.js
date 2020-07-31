const HOC = WrappedComponent =>
  class WrapperComponent extends Component {
    render() {
      const newProps = {
        name: 'HOC'
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }

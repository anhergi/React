import Botones from './Botones'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    paises: state.paises
})

export default connect(mapStateToProps)(Botones)
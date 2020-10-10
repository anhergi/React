import Botones2 from './Botones2'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    paises: state.paises
})

export default connect(mapStateToProps)(Botones2)
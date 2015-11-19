import _ from 'lodash'

export default (base, ...args) =>  _.defaultsDeep(base, ...args)

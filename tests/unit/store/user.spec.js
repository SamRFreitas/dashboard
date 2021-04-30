import useStore from '../../../src/hooks/useStore'
import { setCurrentUser, resetUserStore, setApiKey, cleanCurrentUser } from '../../../src/store/user'

describe('UserStore', () => {
  let store
  beforeEach(() => {
    store = useStore()
  })

  afterEach(() => {
    resetUserStore()
  })

  it('should return current user', () => {
    setCurrentUser({ name: 'Teste' })
    expect(store.User.currentUser.name).toBe('Teste')
  })

  it('should set apiKey on current user', () => {
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean current user', () => {
    setCurrentUser({ name: 'Teste' })
    expect(store.User.currentUser.name).toBe('Teste')
    cleanCurrentUser(store.User.currentUser.name)
    expect(store.User.currentUser.name).toBeFalsy()
  })
})

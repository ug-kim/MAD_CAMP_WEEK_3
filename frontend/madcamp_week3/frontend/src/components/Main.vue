<!--script>
import axios from 'axios'

export default {
  name: 'Main',
  data () {
  },
  methods: {
    getUserData: function () {
      let self = this
      axios.get('/api/user')
        .then((response) => {
          self.$set(this, 'user', response.data.user)
        })
        .catch((errors) => {
        })
    }
  },
  mounted () {
    this.getUserData()
  }
}
</script-->

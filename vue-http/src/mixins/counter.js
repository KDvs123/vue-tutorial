export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count += 1;
    },
  },
};

//its also can to mixin computed properties , watchers and life cycle hooks also
// merging of different options
//components get the higher property
//if two mixin have same property then the component property will override the mixin property
//if two mixin have same property then the last mixin will override the first mixin property



import { getBanners } from '@/api/banner';

export default {
  namespaced: true,
  state: {
    loading: false,
    data: []
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchBanner(ctx) {
      // 未刷新，还有数据时
      if (ctx.state.data.length) {
        return;
      };
      ctx.commit("setLoading", true);
      const resp = await getBanners();
    //  for (const item of resp) {
    //   item.midImg = 'http://127.0.0.1:7001' + item.midImg;
    //   item.bigImg = 'http://127.0.0.1:7001' + item.bigImg;
    //  }

    //   console.log(resp)
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    }
  }
}
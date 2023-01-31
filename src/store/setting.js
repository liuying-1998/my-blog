import { getSetting } from "@/api/setting";
import { titleController } from "@/utils";

export default {
  namespaced: true,
  state: {
    loading: false,
    data: null
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchSetting(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getSetting();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
      if (resp.favicon) {
        let iconLink = document.querySelector("link[ref='shortcut icon']")
        console.log(iconLink)
        if (iconLink) {
          return;
        }
        iconLink = document.createElement('link');
        iconLink.rel = "shortcut icon";
        iconLink.type = "images/x-icon";
        iconLink.href = resp.favicon;
        document.querySelector("head").appendChild(iconLink)
      }
      if (resp.siteTitle) {
        titleController.setSiteTitle(resp.siteTitle)
      }
    }
  },
}
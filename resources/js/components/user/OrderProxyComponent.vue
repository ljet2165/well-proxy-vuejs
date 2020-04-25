<template>
  <div class="col-md-9">
    <div class="content-card">
      <div class="table-body-container table-body">
        <b-table
          responsive
          :striped="striped"
          :bordered="bordered"
          :borderless="borderless"
          :sticky-header="stickyHeader"
          :outlined="outlined"
          :small="small"
          :hover="hover"
          :dark="dark"
          :fixed="fixed"
          :no-border-collapse="noCollapse"
          :items="items"
          :head-variant="headVariant"
          :table-variant="tableVariant"
        >
          <template v-slot:cell(actions)="data" class="text-center">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <a href="#" class="text-success" v-html="data.value.edit"></a>
            <a href="#" class="text-danger" v-html="data.value.delete"></a>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Sidenav from "./Sidenav";
import AboutUsSection from "../AboutUsSection";
import CustomerQuotes from "../CustomerQuotes";
import FooterComponent from "../FooterComponent";

export default {
  components: {
    Header,
    Sidenav,
    AboutUsSection,
    CustomerQuotes,
    FooterComponent
  },
  data() {
    return {
      fields_head: [
        { key: "zone", tdClass: "text-center" },
        { key: "type", tdClass: "text-center" },
        { key: "allocated_IPs", tdClass: "text-center" },
        { key: "usage_limit", tdClass: "text-center" },
        { key: "permissions", tdClass: "text-center" },
        { key: "traffic", tdClass: "text-center" },
        { key: "cost", tdClass: "text-center" },
        { key: "actions", tdClass: "text-center", thClass: "text-center" }
      ],
      items: [
        {
          zone: "Dickerson",
          type: "Macdonald",
          allocated_IPs: 40,
          usage_limit: "Macdonald",
          permissions: "Macdonald",
          traffic: "Macdonald",
          cost: "Macdonald",
          actions: {
            edit: "<i class='fa fa-edit'></i>",
            delete: "<i class='fa fa-trash'></i>"
          }
        },
        {
          zone: "Dickerson",
          type: "Macdonald",
          allocated_IPs: 40,
          usage_limit: "Macdonald",
          permissions: "Macdonald",
          traffic: "Macdonald",
          cost: "Macdonald",
          actions: {
            edit: "<i class='fa fa-edit'></i>",
            delete: "<i class='fa fa-trash'></i>"
          }
        },
        {
          zone: "Dickerson",
          type: "Macdonald",
          allocated_IPs: 40,
          usage_limit: "Macdonald",
          permissions: "Macdonald",
          traffic: "Macdonald",
          cost: "Macdonald",
          actions: {
            edit: "<i class='fa fa-edit'></i>",
            delete: "<i class='fa fa-trash'></i>"
          }
        },
        {
          zone: "Dickerson",
          type: "Macdonald",
          allocated_IPs: 40,
          usage_limit: "Macdonald",
          permissions: "Macdonald",
          traffic: "Macdonald",
          cost: "Macdonald",
          actions: {
            edit: "<i class='fa fa-edit'></i>",
            delete: "<i class='fa fa-trash'></i>"
          }
        }
      ],
      tableVariants: [
        "primary",
        "secondary",
        "info",
        "danger",
        "warning",
        "success",
        "light",
        "dark"
      ],
      striped: false,
      bordered: false,
      borderless: true,
      outlined: false,
      small: false,
      hover: true,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: "",
      noCollapse: true,
      stickyHeader: true
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

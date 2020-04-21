<template>
  <div class="col-md-9">
    <div class="content-card">
      <!-- <div class="table-head">
        <b-table
          :striped="striped"
          :bordered="bordered"
          :borderless="borderless"
          :outlined="outlined"
          :small="small"
          :hover="hover"
          :dark="dark"
          :fixed="fixed"
          :foot-clone="footClone"
          :no-border-collapse="noCollapse"
          :fields="fields_head"
          :head-variant="headVariant"
          :table-variant="tableVariant"
        ></b-table>
      </div>-->

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

<style scoped>
.profile-header-section {
  background: url(/images/resources/home-page/banner-image.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
  min-height: 20rem;
}
.profile-header-section .navbar.navbar-light {
  background: transparent !important;
}
.profile-header-section .navbar.navbar-light .navbar-brand,
.profile-header-section .navbar.navbar-light .navbar-nav .nav-link {
  color: #fff !important;
}
.profile-header-section .router-link-active.router-link-exact-active:not(.btn) {
  border-bottom: 0.1rem solid #fff;
}
.profile-header-section .btn-outline-primary {
  color: #fff;
  border-color: #fff;
}
.profile-header-section .btn-primary {
  color: var(--blue);
  background-color: #fff;
  border-color: #fff;
}

.table-head {
  padding: 0 1rem;
}
.table-body {
  background-color: #fff;
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1rem 0;
}

.secondary-heading {
  flex: 1;
  color: var(--blue);
  font-weight: 500;
  font-size: 1.4rem;
}
.text-muted-color {
  color: #a9a9a9;
  font-size: 1rem;
}
.text-muted {
  font-size: 12px;
}

.form-control:focus {
  border-color: transparent;
  box-shadow: none;
  border: 2px solid var(--blue);
  border-left: none;
}
.form-control:focus + .input-group-prepend .input-group-text {
  border: 2px solid var(--blue);
  border-right: none;
}

.content-card {
  margin-top: -6rem;
}
.nav.nav-pills li.nav-item {
  padding-bottom: 0;
}
.nav-pills .nav-link {
  color: white;
  font-weight: 500;
  font-size: 1rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--blue);
  background-color: #fff;
}
.tab-content {
  background: #fff;
}
@media (min-width: 768px) {
  .custom-offset-md-1 {
    margin-left: 13.333333%;
  }
}
@media only screen and (max-width: 768px) {
  .card-3 {
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 576px) {
  .card {
    margin-top: 1rem;
  }
}
</style>

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
        {key: "zone", tdClass: 'text-center'},
        {key: "type", tdClass: 'text-center'},
        {key: "allocated_IPs", tdClass: 'text-center'},
        {key: "usage_limit", tdClass: 'text-center'},
        {key: "permissions", tdClass: 'text-center'},
        {key: "traffic", tdClass: 'text-center'},
        {key: "cost", tdClass: 'text-center'},
        {key: "actions", tdClass: 'text-center', thClass: "text-center"},
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
        },
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

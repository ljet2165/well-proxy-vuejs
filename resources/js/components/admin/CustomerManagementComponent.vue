<template>
  <div class="col-md-9">
    <div class="content-card">
      <div class="table-body-container table-body">
        <v-app id="datatable-app">
          <v-card-title>
            <div class="row">
              <div class="col-lg-3 offset-lg-9">
                <input
                  type="text"
                  class="form-control search-field"
                  v-model="search"
                  placeholder="Search "
                />
              </div>
            </div>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            :page.sync="page"
            :fixed-header="fixedHeader"
            :disable-sort="sort"
            :items-per-page="itemsPerPage"
            hide-default-footer
            @page-count="pageCount = $event"
            class="data-table"
          >
            <template v-slot:item.customer="{ item }">
              <span class="customer_name">{{ item.customer.name }}</span>
              <br />
              <span class="customer_email">{{ item.customer.email }}</span>
              <br />
              <span class="customer_mobile">{{ item.customer.mobile }}</span>
            </template>

            <template v-slot:item.company="{ item }">
              <span class="company_name">{{ item.company.name }}</span>
              <br />
              <span class="company_address">{{ item.company.address }}</span>
              <br />
              <span class="company_house">{{ item.company.house }}</span>
              <br />
              <span class="company_city">{{ item.company.city }}</span>
              <br />
              <span class="company_mobile">{{ item.company.mobile }}</span>
            </template>

            <template v-slot:item.status="{ item }">
              <toggle-button
                :value="item.status.status"
                :width="width"
                :id="item.status.id"
                :font-size="fontSize"
                :height="height"
                :labels="{checked: 'Activate', unchecked: 'Suspend'}"
                :color="{checked: '#009933', unchecked: '#FF0000', disabled: '#CCCCCC'}"
                @change="onToggleChange($event,item.status.id)"
              />
            </template>

            <template v-slot:item.proxy="{ item }">
              <span v-html="getProxies(item.proxy)"></span>
            </template>

            <template v-slot:item.action="{ item }">
              <span class="btn-edit">
                <a href="#" v-html="item.action.edit"></a>
              </span>
              <span class="btn-remove">
                <a href="#" class="text-danger" v-html="item.action.delete"></a>
              </span>
            </template>
          </v-data-table>
          <div class="text-center ml-auto pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-app>
      </div>
    </div>
    <!-- Status Model -->
    <div class="modal fade" id="statusmodel" role="dialog">
      <div class="modal-dialog modal-width model-sm">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header bottom-down">
            <h5 class="modal-title" style="color:var(--blue);margin-left: 100px">PLease Confirm</h5>
          </div>
          <div class="modal-body">
            <center>
              <p style="margin-left:20px;margin-right:20px;font-size:18px">
                Are You Sure you want to {{status}}
                <b>{{user}}</b> acount?
              </p>
            </center>
          </div>
          <div class="modal-footer bottom-up">
            <button
              type="button"
              class="btn btn-default pull-left cls-btn-css"
              @click="statusaction(false)"
            >NO</button>
            <button
              type="button"
              class="btn btn-default pull-right btn-css"
              @click="statusaction(true)"
            >Yes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vuetify from "vuetify";
export default {
  methods: {
    getProxies: function(proxy) {
      let proxystr = "";
      proxy.forEach(element => {
        proxystr += `<span class='proxy'>${element}</span></br>`;
      });
      return proxystr;
    },

    onToggleChange: function(event, id) {
      $("#statusmodel").modal("show");
      this.switchid = id;
      if (event.value) {
        this.status = "Activate";
      } else {
        this.status = "Suspend";
      }
    },
    statusaction: function(status) {
      $("#statusmodel").modal("hide");
    }
  },
  data() {
    return {
      status: "Activate",
      user: "Arslan Ali",
      switchid: "",

      search: "",
      width: 90,
      height: 30,
      fontSize: 12,
      sort: true,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      fixedHeader: true,
      headers: [
        {
          text: "Customers",
          value: "customer",
          align: "start",
          sortable: false
        },
        { text: "Company Details", value: "company", sortable: false },
        { text: "Plan Name", value: "plan", sortable: false },
        { text: "Setup Date", value: "setup_date", sortable: false },
        { text: "Status", value: "status", sortable: false },
        { text: "Proxy", value: "proxy", sortable: false },
        { text: "Data Traffic", value: "data_traffic", sortable: false },
        { text: "Actions", value: "action", sortable: false }
      ],
      items: [
        {
          customer: {
            name: "Ali Arsalan",
            email: "aliarsalan@gmail.com",
            mobile: "+923123456789"
          },
          company: {
            name: "Softech Visions",
            address: "VAT No: 1234",
            house: "House No. 23 street 1,",
            city: "Bahria Orchard, Lahore",
            phone: "+923216547898"
          },
          plan: "Premium",
          status: { status: true, id: "5" },
          setup_date: "14-04-2020",
          proxy: ["Data Center", "Static Residential", "Residential", "Mobile"],
          data_traffic: "5.3 MB",
          action: {
            edit: "<i class='fa fa-edit'></i>",
            delete: "<i class='fa fa-trash'></i>"
          }
        },
        {
          customer: {
            name: "Ali Arsalan",
            email: "aliarsalan@gmail.com",
            mobile: "+923123456789"
          },
          company: {
            name: "Softech Visions",
            address: "VAT No: 1234",
            house: "House No. 23 street 1,",
            city: "Bahria Orchard, Lahore",
            phone: "+923216547898"
          },
          plan: "Premium",
          status: { status: true, id: "4" },
          setup_date: "14-04-2020",
          proxy: ["Data Center", "Static Residential", "Residential", "Mobile"],
          data_traffic: "5.3 MB",
          action: {
            edit: "<i class='fa fa-edit'></i>",
            delete: "<i class='fa fa-trash'></i>"
          }
        },
        {
          customer: {
            name: "Ali Arsalan",
            email: "aliarsalan@gmail.com",
            mobile: "+923123456789"
          },
          company: {
            name: "Softech Visions",
            address: "VAT No: 1234",
            house: "House No. 23 street 1,",
            city: "Bahria Orchard, Lahore",
            phone: "+923216547898"
          },
          plan: "Premium",
          status: { status: true, id: "3" },
          setup_date: "14-04-2020",
          proxy: ["Data Center", "Static Residential", "Residential", "Mobile"],
          data_traffic: "5.3 MB",
          action: {
            edit: "<i class='fa fa-edit'></i>",
            delete: "<i class='fa fa-trash'></i>"
          }
        },
        {
          customer: {
            name: "Ali Arsalan",
            email: "aliarsalan@gmail.com",
            mobile: "+923123456789"
          },
          company: {
            name: "Softech Visions",
            address: "VAT No: 1234",
            house: "House No. 23 street 1,",
            city: "Bahria Orchard, Lahore",
            phone: "+923216547898"
          },
          plan: "Gold",
          status: { status: true, id: "2" },
          setup_date: "14-04-2020",
          proxy: ["Data Center", "Static Residential", "Residential", "Mobile"],
          data_traffic: "5.3 MB",
          action: {
            edit: "<i class='fa fa-edit'></i>",
            delete: "<i class='fa fa-trash'></i>"
          }
        },
        {
          customer: {
            name: "Ali Arsalan",
            email: "aliarsalan@gmail.com",
            mobile: "+923123456789"
          },
          company: {
            name: "Softech Visions",
            address: "VAT No: 1234",
            house: "House No. 23 street 1,",
            city: "Bahria Orchard, Lahore",
            phone: "+923216547898"
          },
          plan: "Premium",
          status: { status: false, id: "1" },
          setup_date: "14-04-2020",
          proxy: ["Data Center", "Static Residential", "Residential", "Mobile"],
          data_traffic: "5.3 MB",
          action: {
            edit: "<i class='fa fa-edit'></i>",
            delete: "<i class='fa fa-trash'></i>"
          }
        }
      ]
    };
  }
};
</script>

<style src="../assets/admin/CustomerManagementComponent.css" scoped></style>

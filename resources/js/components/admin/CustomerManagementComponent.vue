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
                  <div class="modal-body" >
                  <center>  <p style="margin-left:20px;margin-right:20px;font-size:18px">Are You Sure you want  to {{status}} <b>{{user}}</b> acount?</p></center>
                  </div>
                  <div class="modal-footer  bottom-up">
                    <button type="button" class="btn btn-default pull-left cls-btn-css" @click="statusaction(false)">NO</button>
                    <button type="button" class="btn btn-default pull-right btn-css" @click="statusaction(true)">Yes</button>

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
onToggleChange:function(event,id){
$('#statusmodel').modal('show')
this.switchid=id
if(event.value)
{
  this.status='Activate';
}else{
  this.status='Suspend';
}
},
    statusaction: function(status) {
     $('#statusmodel').modal('hide')      
  
    }
  },
  data() {
    return {
      status:'Activate',
      user:'Arslan Ali',
      switchid:'',
      columns: [
        {
          label: "Customers",
          representedAs: ({ customer }) =>
            `${customer.name}<br />${customer.email}, ${customer.mobile}`,
          interpolate: true
        },
        {
          label: "Company Details",
          representedAs: ({ company }) =>
            `${company.name}</br>${company.address}<br />${company.house}</br> ${company.city} </br> ${company.phone}`,
          interpolate: true
        },
        { label: "Plan Name", field: "plan", headerClass: "class" },
        { label: "Setup Date", field: "setup_date", headerClass: "class" },
        { label: "Status",
          representedAs: ({ Status }) =>
            `${Status.status}</br>${Status.id}`,
          interpolate: true },
        { label: "Proxy", field: "proxy" },
        { label: "Data Traffic", field: "data_traffic" },
        { label: "Actions", field: "action" }
      ],
      rows: [
        {
          id: 1,
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
          setup_date: "14-04-2020",
          proxy:
            "Data Center </br> Static Residential </br> Residential </br> Mobile",
          data_traffic: "5.3 MB",
          action: "<i class='fa fa-edit'></i>"
        }
      ],
      page: 1,
      per_page: 10,
      sortable: false,
      caption: false,
      pagination: true,
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
          setup_date: "14-04-2020",
          proxy:
            "Data Center </br> Static Residential </br> Residential </br> Mobile",
          data_traffic: "5.3 MB",
          action: "<i class='fa fa-edit'></i>"
        }
      ],

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
          status:{status:true,id:'5'},
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
          status:{status:true,id:'4'},
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
          status:{status:true,id:'3'},
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
          status:{status:true,id:'2'},
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
          status:{status:false,id:'1'},
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
  },
  mounted(){
    console.log(this.items)
  }
};
</script>


<style scoped>
.modal-width{
  width:400px;
}
.btn-css{
    background-color: #3b6dbd;
    color: white;
    width: 80px;
    border-radius: 10px;
}
.cls-btn-css{
 margin-right:200px;
    width: 80px;
    border-radius: 10px;
     background-color:#dee2e6
}
.modal-content  {
    -webkit-border-radius: 15px !important;
    -moz-border-radius: 15px !important;
    border-radius: 15px !important; 
}
.bottom-up{
  border-top:1px solid #1f5bbb;
}
.bottom-down{
  border-bottom:1px solid #1f5bbb;
}
#datatable-app {
  margin-top: -10rem;
  background: transparent;
  padding: 0 0.2rem;
}
.v-application .data-table {
  box-shadow: none;
}
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

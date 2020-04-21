<template>
  <div class="col-md-9">
    <div class="content-card card-box bg-white">
      <div class="container-fluid chart-container">
        <!-- head row Section -->
        <div class="row header-row">
          <div class="col-md-2"></div>

          <div class="col-md-2">
            <h3>Full Name</h3>
          </div>

          <div class="col-md-2">
            <h3>Email</h3>
          </div>

          <div class="col-md-2">
            <h3>Phone</h3>
          </div>

          <div class="col-md-4">
            <h3>Actions</h3>
          </div>
        </div>
        <!-- head row Section End -->

        <div class="row table-heading">
          <div class="col-md-2 p-0">
            <div class="table-heading-main">
              <img :src="user_avatar_src" :alt="user_avatar_alt" class="img-fluid user_avatar" />
            </div>
          </div>
          <div class="col-md-2 p-0">
            <div class="table-heading-data">
              <p>Ahmad Fraz</p>
            </div>
          </div>
          <div class="col-md-2 p-0">
            <div class="table-heading-data">
              <p>ahmadfraz@gmail.com</p>
            </div>
          </div>
          <div class="col-md-2 p-0">
            <div class="table-heading-data">
              <p>+903123458798</p>
            </div>
          </div>
          <div class="col-md-4 p-0">
            <div class="table-heading-data">
              <a href="#" class="btn btn-danger d-inline-block mr-3">
                <span class="fas fa-edit"></span>
              </a>
              <a href="#" class="btn btn-outline-danger d-inline-block">Suspend Account</a>
            </div>
          </div>
        </div>

        <!-- table data start -->
        <v-app class="table-app">
          <v-container class="company-table-container">
            <v-card-title>
              Company Details
              <v-spacer></v-spacer>
              <v-col class="text-right" cols="12" sm="4">
                <AddCompany></AddCompany>
              </v-col>
            </v-card-title>
            <v-data-table :headers="headers" :items="items" hide-default-footer>
              <template v-slot:item.action="{ item }">
                <span class="btn-edit">
                  <a href="#" v-html="item.action.edit"></a>
                </span>
                <span class="btn-remove">
                  <a href="#" class="text-danger" v-html="item.action.delete"></a>
                </span>
              </template>
            </v-data-table>
          </v-container>
          <!-- table data end -->
        </v-app>
      </div>
    </div>
  </div>
</template>


<script>
import AddCompany from "./AddCompany";
export default {
  components: {
    AddCompany
  },
  data() {
    return {
      user_avatar_src: "/images/resources/user/users-vector.jpg",
      user_avatar_alt: "User Avatar",

      headers: [
        {
          text: "Company Name",
          align: "start",
          sortable: false,
          value: "company_name"
        },
        { text: "VAT Number", value: "vat_num", sortable: false },
        { text: "Address", value: "address", sortable: false },
        { text: "Phone", value: "phone", sortable: false },
        { text: "Actions", value: "action", sortable: false }
      ],

      items: [
        {
          company_name: "Softech Visions",
          vat_num: 123456,
          address: "House No. 23 street 1, Bahria Orchard, Lahore",
          phone: +921235468798,
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


<style scoped>
.content-card {
  margin-top: -5rem;
}
/* heading row */
.row.header-row {
  margin-top: -5rem;
  color: #fff;
  text-align: center;
}
.header-row h3 {
  font-size: 1.2rem;
}
.row.table-heading {
  background: #f5f5f5;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.table-heading h1 {
  color: var(--blue);
  font-size: 1.6rem;
  font-weight: 600;
}
.table-heading p.text-small {
  font-size: 0.9rem;
  color: var(--secondary);
}
.table-heading .table-heading-main img.user_avatar {
  margin-top: -4.7rem;
  border-radius: 10px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
}

.table-heading .table-heading-main {
  padding: 2rem 2rem;
}
.table-heading .table-heading-data {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}
.table-heading p {
  color: var(--primary-color);
  font-weight: 600;
}
/* heading row */
>>>.v-application.table-app .v-application--wrap {
  min-height: 70vh;
}
>>> .table-app .v-card__title {
  color: var(--secondary-color);
  font-size: 1.4rem;
  font-weight: 600;
}
>>> .table-app .v-card__title {
  border-bottom: 1px solid var(--blue);
}
>>> .table-app .v-card__actions {
  padding-left: 2rem;
  padding-right: 2rem;
  border-top: 1px solid var(--blue);
}
>>> .table-app .theme--light.v-data-table thead tr th {
  color: var(--secondary);
  font-size: 1rem;
  font-weight: 500;
}
/* table-data */
.row.table-row {
  font-size: 1rem;
  color: #6f6f6f;
}
.row.table-row:not(:last-child) {
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}
.row.table-row div:not(:first-child) {
  text-align: center;
}
.row.table-row a.btn,
.row.table-row p.table-data {
  display: inline-block;
}

/* table-data */

/* table footer */
.table-footer-row {
  text-align: center;
}
/* table footer end */

.text-bold {
  font-weight: bold;
}

.card-box {
  padding: 1rem 0rem;
}
.card-icon {
  font-size: 1.8rem;
  vertical-align: top;
  color: var(--secondary-color);
  margin-right: 0.3rem;
}
.card-heading-row {
  border-bottom: 1px solid var(--secondary-text-color);
  padding: 0.2rem 1rem;
}
h2.card-box-heading {
  font-size: 1.3rem;
  color: var(--secondary);
  margin-bottom: 0.1rem;
}
p.card-box-description {
  font-size: 1.2rem;
  margin-bottom: -5px;
}
.card-box-desc .text-muted {
  font-size: 12px;
  color: #8c8c8c !important;
}
.network-type-card .card-box-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--secondary-color);
}
.network-type-card .card-box-description {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
}
.network-type-card .text-muted {
  font-size: 9px;
}
p.card-box-desc {
  /* font-size: 1.2rem;
  color: var(--cyan);
  font-weight: 500;
  margin-bottom: 0; */
}
.filter-row {
  margin-top: -2rem;
}
.filter-row .card-box {
  border-radius: 10px;
  min-height: 8rem;
}

select.custom-select {
  border: none;
  border-bottom: 1px solid #ced4da;
  border-radius: 0;
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

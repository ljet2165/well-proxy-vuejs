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

<style src="../assets/user/ProfileComponent.css" scoped></style>

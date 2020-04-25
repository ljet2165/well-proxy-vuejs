<template>
  <div class="col-md-9">
    <div class="content-card card-box bg-white">
      <v-app>
        <v-content>
          <v-tabs hide-slider>
            <v-tabs-slider></v-tabs-slider>
            <v-tab>Url Rules</v-tab>
            <v-tab-item>
              <v-container>
                <v-row>
                  <v-col md="4">
                    <h4 class="vtab-heading">Choose Mode:</h4>

                    <v-radio-group v-model="checkWhich">
                      <v-radio label="Whitelist" value="whitelist"></v-radio>
                      <v-radio label="Blacklist" value="blacklist"></v-radio>
                      <v-radio label="Disabled" value="disabled"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col md="4">
                    <h4 class="vtab-heading">Chek Header:</h4>

                    <v-radio-group>
                      <v-radio label="Host" value="host"></v-radio>
                      <v-radio label="Full Url" value="full_url"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col md="4">
                    <h4>ClientUid: 7b102be04651212</h4>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col md="8">
                    <label for>Sites:</label>
                    <v-textarea
                      placeholder="One line only one rule, a valid rule like these: google.com, youtube.com"
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>

                <v-btn depressed color="primary">Ok</v-btn>
              </v-container>
            </v-tab-item>

            <v-tab>IP Filter</v-tab>
            <v-tab-item>
              <v-container>
                <h3 class="vtab-heading">Choose Mode:</h3>

                <v-radio-group v-model="checkWhich">
                  <v-radio label="Whitelist" value="whitelist"></v-radio>
                  <v-radio label="Blacklist" value="blacklist"></v-radio>
                  <v-radio label="Disabled" value="disabled"></v-radio>
                </v-radio-group>

                <v-row>
                  <v-col md="8">
                    <label for>Ips:</label>
                    <v-textarea
                      placeholder="One line only one rule, a valid rule like these: 1.2.3.4. 13.0.0.0/17"
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>

                <v-btn depressed color="primary">Ok</v-btn>
              </v-container>
            </v-tab-item>

            <v-tab>Netword</v-tab>
            <v-tab-item>
              <v-container>
                <v-row>
                  <v-col md="4">
                    <label for>
                      ComcurrentConns
                      <small class="text-muted">(0 mean no limitation)</small>:
                    </label>
                    <v-text-field type="number" value="0" outlined></v-text-field>
                  </v-col>
                </v-row>

                <v-btn depressed color="primary">Ok</v-btn>
              </v-container>
            </v-tab-item>

            <v-tab>Traffic</v-tab>
            <v-tab-item>
              <v-container fluid>
                <v-row>
                  <v-col sm="6">
                    <label>
                      Traffic Limitations
                      <small class="text-muted">(Bytes)</small>:
                    </label>
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                      </b-input-group-prepend>

                      <b-form-input type="number" v-model="bytes" min="0.00"></b-form-input>
                    </b-input-group>
                    <small class="text-muted">
                      <span v-text="bytes"></span> Bytes
                    </small>
                  </v-col>
                </v-row>
                <v-btn depressed color="primary">Ok</v-btn>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-content>
      </v-app>
    </div>
  </div>
</template>

<style scoped>
.content-card {
  margin-top: -6rem;
  min-height: 30rem;
}
.card-box {
  padding: 1rem 0rem;
  border-top-left-radius: 0;
}
h2.card-box-heading {
  font-size: 1.3rem;
  color: var(--secondary);
  margin-bottom: 0.1rem;
}
p.card-box-desc {
  font-size: 1.2rem;
  color: var(--cyan);
  font-weight: 500;
  margin-bottom: 0;
}

>>> .theme--light.v-application {
  margin-top: -4rem;
  background: transparent;
}
.content-card >>> .theme--light.v-tabs > .v-tabs-bar .v-tab {
  margin: 0 4px;
}
.content-card >>> .theme--light.v-tabs > .v-tabs-bar .v-tab:first-child {
  margin-left: 0;
}
>>> .v-window-item.v-window-item--active {
  padding: 2rem 1rem;
}
>>> .theme--light.v-label {
  margin-bottom: 0;
}
.content-card
  >>> .theme--light.v-tabs
  > .v-tabs-bar
  .v-tab:not(.v-tab--active) {
  background: #34629f;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.content-card >>> .v-tab--active {
  color: inherit;
  background: #fff;
  color: var(--blue) !important;
  font-weight: 600;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.content-card >>> .v-tab--active::after {
  content: "";
  height: 2px;
  position: absolute;
  display: block;
  width: 85%;
  background: var(--blue);
  border-right: 1px white;
  bottom: 0;
}
>>> .theme--light.v-tabs > .v-tabs-bar {
  background: transparent;
}

>>> .tabs-section .tabs {
  margin-top: -3.5rem;
}
>>> .custom-select,
>>> .form-control {
  height: calc(2.6em + 0.75rem + 2px);
}
.filter-row {
  margin-top: -2rem;
}
.filter-row .card-box {
  border-radius: 10px;
}

label {
  font-size: 1.2rem;
}

.form-control:focus {
  border-color: transparent;
  box-shadow: none;
  border: 2px solid var(--blue);
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
export default {
  data() {
    return {
      bytes: 0,
      checkWhich: "blacklist",
      selected: null,
      options: [
        { value: null, text: "Choose" },
        { value: "a", text: "First option" },
        { value: "b", text: "Second Option" },
        { value: "c", text: "Third option" }
      ]
    };
  }
};
</script>

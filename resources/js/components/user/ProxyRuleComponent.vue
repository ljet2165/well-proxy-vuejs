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

<style src="../assets/user/ProxyRuleComponent.css" scoped></style>
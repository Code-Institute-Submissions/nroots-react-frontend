import React, { Fragment } from "react";

// import components
import HeaderShop from "../../../../components/shop/navbar/HeaderShop";
import PageTitle from "../../../../components/shop/pageTitle/PageTitle";
// import ForgotPasswordForm
import ForgotPasswordForm from "../../../../components/global/forms/ForgotPasswordForm";
// ===================================================================================================
// Forgot Password Page
export default function ForgotPassword({ options }) {
  return (
    <Fragment>
      <HeaderShop options={options} />

      <PageTitle name="Forgot Password" />

      {/* start forgotpassword-layout */}
      <section className="forgot-password-section">
        <div className="container-1310">
          <div className="row">
            <div className="col-xs-12">
              <div className="ecom">
                <div className="ecom-notices-wrapper" />
                <div className="u-columns col2-set">
                  <div className="u-column2 col-2">
                    <ForgotPasswordForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end forgotpassword-layout */}
      <Footer />
    </Fragment>
  );
}

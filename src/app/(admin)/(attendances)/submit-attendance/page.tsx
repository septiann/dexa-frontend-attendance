import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DefaultInputs from "@/components/form/form-elements/DefaultInputs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Submit Absensi",
  description:
    "Submit Absensi",
};

export default function FormElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Submit Absensi" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
        </div>
      </div>
    </div>
  );
}

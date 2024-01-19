import React, { FC, useState } from "react";
import { VariantType, enqueueSnackbar } from "notistack";

export const summonFlashMessage = (message: string, type?: VariantType) =>
  type ? enqueueSnackbar(message, { variant: type }) : enqueueSnackbar(message);

import ResetPassword from "./containers/ResetPassword";
<Route
  path="/login/reset"
  element={
    <UnauthenticatedRoute>
      <ResetPassword />
    </UnauthenticatedRoute>
  }
/>
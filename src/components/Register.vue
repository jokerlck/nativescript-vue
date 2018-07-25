<template>
  <Page class="page">
    <ActionBar title="Register" class="action-bar" flat="true">
        <ActionItem @tap="onOpenDrawerTap"
        ios.systemIcon="2" ios.position="right"
        android.systemIcon="ic_menu_edit" />
    </ActionBar>
    <RadSideDrawer ref="drawer" showOverNavigation="true">
        <StackLayout ~drawerContent backgroundColor="gray">
            <StackLayout height="56" style="text-align: center; vertical-align: center;">
                <Label text="Navigation Menu" />
            </StackLayout>
            <StackLayout>
                <Label text="Primary" padding="10" backgroundColor="lightgray" />
                <Label text="Social" padding="10" />
                <Label text="Promotions" padding="10" />
                <Label text="Labels" padding="10" backgroundColor="lightgray" />
                <Label text="Important" padding="10" />
                <Label text="Starred" padding="10" />
                <Label text="Sent Mail" padding="10" />
                <Label text="Drafts" padding="10" />
            </StackLayout>
            <Label text="Close" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap" />
        </StackLayout>
        <StackLayout ~mainContent>
            <Label text="Labels" padding="10" backgroundColor="lightgray" />                
        </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script>
    export default {
        data () {
            return {
            };
        },
        methods: {
            onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
            },
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            },
        }
    };
</script>

<style scoped>
</style>

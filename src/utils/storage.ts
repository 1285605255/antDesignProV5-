mport { reloadAuthorized } from './Authorized';

export function getAuthority() {
    const AUTHORITY_KEY = 'AUTHORITY_KEY';

    const authorityString = localStorage.getItem(AUTHORITY_KEY);
    let authority;
    try {
        if (authorityString) {
            authority = JSON.parse(authorityString);
        }
    } catch (e) {
        authority = authorityString;
    }

    // if (typeof authority === 'string' || typeof authority === 'number') {
    //   console.log('最终权限', authority);
    //   return [authority];
    // }
    // if( !authority.includes( "shanghai")){
    //   authority = ["user"]
    //   console.log('最终权限', authority);
    //
    //   return authority;
    // }
    // if(authority.includes( "shanghai")){
    //   authority = ["admin"]
    //   console.log('最终权限', authority);
    //
    //   return authority;
    // }
    if (authority) {
        if (authority[0] === 'test_pharmacy') {
            return ['user'];
        }
        if (authority[0] === 'test_zone') {
            return ['admin'];
        }
        if (authority[0] === 'test_city' || authority[0] === 'admin') {
            return ['admin'];
        }
    }

    if (typeof authority === 'string') {
        return [authority];
    }


    return authority;
}


window.addEventListener('storage', (e) => {
    sessionStorage.setItem(e.key, e.oldValue) //重新赋值修改前的值
})

export function setAccount(account: string) {
    const ACCOUNT_KEY = 'HAIYUL-ACCOUNT-NEW';
    localStorage.setItem(ACCOUNT_KEY, account);
}

export function getAccount() {
    const ACCOUNT_KEY = 'HAIYUL-ACCOUNT-NEW';
    return localStorage.getItem(ACCOUNT_KEY);
}
export function removeAccount() {
    const ACCOUNT_KEY = 'HAIYUL-ACCOUNT-NEW';
    return localStorage.removeItem(ACCOUNT_KEY);
}


export function setAccess(token: string) {
    const ACCOUNT_KEY = 'currentAccess';
    localStorage.setItem(ACCOUNT_KEY, token);
}

export function getAccess() {
    const ACCOUNT_KEY = 'currentAccess';
    return localStorage.getItem(ACCOUNT_KEY);
}

export function removeAccess() {
    const ACCOUNT_KEY = 'currentAccess';
    return localStorage.removeItem(ACCOUNT_KEY);
}


export function setRefresh(token: string) {
    const ACCOUNT_KEY = 'currentRefresh';
    localStorage.setItem(ACCOUNT_KEY, token);
}

export function getRefresh() {
    const ACCOUNT_KEY = 'currentRefresh';
    return localStorage.getItem(ACCOUNT_KEY);
}

export function removeRefresh() {
    const ACCOUNT_KEY = 'currentRefresh';
    return localStorage.removeItem(ACCOUNT_KEY);
}

// 在sessionStorage中存储用户信息
export function setCurrentUser(user: any) {
    const ACCOUNT_KEY = 'currentUser';
    sessionStorage.setItem(ACCOUNT_KEY, user);
}

export function getCurrentUser() {
    const ACCOUNT_KEY = 'currentUser';
    return sessionStorage.getItem(ACCOUNT_KEY);
}

// window.sessionStorage.removeItem('currentUser');
export function removeCurrentUser() {
    const ACCOUNT_KEY = 'currentUser';
    return sessionStorage.removeItem(ACCOUNT_KEY);
}




export function setToken(token: string) {
    const TOKEN_KEY = 'HAIYUL-TOKEN-NEW';
    localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
    const TOKEN_KEY = 'HAIYUL-TOKEN-NEW';
    return localStorage.getItem(TOKEN_KEY);
}

export function clearToken() {
    const TOKEN_KEY = 'HAIYUL-TOKEN-NEW';
    localStorage.removeItem(TOKEN_KEY);
}


export function clearAuthority() {
    const AUTHORITY_KEY = 'AUTHORITY_KEY';
    localStorage.removeItem(AUTHORITY_KEY);
    reloadAuthorized();
}

export function setAuthority(authority: string | string[]): void {
    const proAuthority = typeof authority === 'string' ? [authority] : authority;
    localStorage.setItem('AUTHORITY_KEY', JSON.stringify(proAuthority)); // auto reload
    reloadAuthorized();
}


// 存储用户的组织相关信息

// 在sessionStorage中存储用户信息
export function setAccountInfo(user: any) {
    const ACCOUNT_KEY = 'accountInfo';
    localStorage.setItem(ACCOUNT_KEY, user);
}

export function getAccountInfo() {
    const ACCOUNT_KEY = 'accountInfo';
    return localStorage.getItem(ACCOUNT_KEY);
}

export function clearAccountInfo() {
    const TOKEN_KEY = 'accountInfo';
    localStorage.removeItem(TOKEN_KEY);
}

// window.sessionStorage.removeItem('currentUser');
export function removeAccountInfo() {
    const ACCOUNT_KEY = 'accountInfo';
    return localStorage.removeItem(ACCOUNT_KEY);
}


// 在sessionStorage中存储用户信息
export function setCurrentSubject(user: any) {
    const ACCOUNT_KEY = 'currentSubject';
    sessionStorage.setItem(ACCOUNT_KEY, user);
}

export function getCurrentSubject() {
    const ACCOUNT_KEY = 'currentSubject';
    return sessionStorage.getItem(ACCOUNT_KEY);
}

// window.sessionStorage.removeItem('currentUser');
export function removeCurrentSubject() {
    const ACCOUNT_KEY = 'currentSubject';
    return sessionStorage.removeItem(ACCOUNT_KEY);
}


export function forbidChangeStorage() {
    window.addEventListener('storage', (e) => {
        if (e.key != null && e.oldValue != null) {
            localStorage.setItem(e.key, e.oldValue);

        } // 重新赋值修改前的值
    });

    window.addEventListener('storage', function (e) {
        if (e.key != null && e.oldValue != null) {
            sessionStorage.setItem(e.key, e.oldValue);
        }
    });
}

// 再localstorage中存储权限数组

export function setCurrentPermission(permissionLIst: any) {

    localStorage.setItem('permissionList', JSON.stringify(permissionLIst));

}

export function getCurrentPermission() {
    return localStorage.getItem('permissionList');
}

// window.sessionStorage.removeItem('currentUser');
export function removeCurrentPermission() {

    return localStorage.removeItem('permissionList');
}


export function setAccountRoles(accountRoles: any) {

    localStorage.setItem('accountRoles', JSON.stringify(accountRoles));

}

export function getAccountRoles() {
    return localStorage.getItem('accountRoles');
}

// window.sessionStorage.removeItem('currentUser');
export function removeAccountRoles() {

    return localStorage.removeItem('accountRoles');
}


// 上报信息页面保存点击的reportId
export function setReportId(params: any) {
    sessionStorage.setItem('report_id', JSON.stringify(params));

}

export function getReportId() {
    return sessionStorage.getItem('report_id');

}

// 账号管理页面保存点击的userId

export function setUserId(params: any) {
    sessionStorage.setItem('user_id', JSON.stringify(params));

}

export function getUserId() {
    return sessionStorage.getItem('user_id');

}
© 2022 GitHub, Inc.
    Terms
Privac